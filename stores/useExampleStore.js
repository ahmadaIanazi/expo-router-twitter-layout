import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { db } from './firebase';
import omit from 'lodash-es/omit';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';
 
export const useExampleStore = create(
  persist(
    subscribeWithSelector((set) => ({
      items: [],
      isAddingItem: false,
      addItem: async (item) => {
        addItemExample(set, item);
      },
      isError: null,
      isLoading: null,
      fetchItems: () => fetchItemsExample(set),
      fetchItemsAndCache: () => useQuery('items', fetchItems), // NOT RECOMMENDED.
      foo: null,
      action: () => {
        const doc = get().items;
        set({ foo: doc[1] });
      },
      basket: {},
      fetch: async (fruits) => {
        const response = await fetch(fruits);
        set({ basket: await response.json() });
      },
      example: 1,
      count: 2,
      deleteExample: () => set((state) => omit(state, ['examples']), true),
      deleteEverything: () => set({}, true), // clears the entire store, actions included
    }))
  ),
  {
    name: 'example-storage', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
  }
);


//============= fetchItemsExample
export const fetchItemsExample = async (set) => {
  set((state) => ({ ...state, isLoading: true }));
  try {
    const items = [];
    const querySnapshot = await db.collection('items').get();
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });
    set((state) => ({ ...state, items, isLoading: false, isError: null }));
  } catch (error) {
    console.error(error);
    set((state) => ({ ...state, isLoading: false, isError: 'Failed to fetch items' }));
  }
};


// ====== Example of how to use
// const { items, isLoading, isError, fetchItems } = useStore();
// OR 
// const { data: items, isLoading, isError } = useQuery('items', fetchItemsExample);
// useEffect(() => {
//   fetchItems();
// }, []);

// if (isLoading) {
//   return <Text>Loading...</Text>;
// }

// if (isError) {
//   return <Text>Error occurred</Text>;
// }

// ============= addItemExample
export const addItemExample = async (set, newItem) => {
  set((state) => ({ ...state, isAddingItem: true }));
  try {
    // Optimistically add the new item to the list
    set((state) => ({ ...state, items: [...state.items, newItem] }));
    // Send request to the backend
    const response = await axios.post('https://example.com/items', newItem);
    if (!response.ok) {
      throw new Error('Failed to add item');
    }
    const addedItem = response.data;
    // Update the list with the actual response from the backend
    set((state) => ({
      ...state,
      items: state.items.map((item) => (item.id === newItem.id ? addedItem : item)),
      isAddingItem: false,
    }));
  } catch (error) {
    // Remove the optimistically added item from the list
    set((state) => ({
      ...state,
      items: state.items.filter((item) => item.id !== newItem.id),
      isAddingItem: false,
    }));
    console.error(error);
  }
};

// EXAMPLE ON HOW TO USE IN JSX
  // const { isAddingItem, addItem, items } = useExampleStore();

  // const exampleSubmission = () => {
  //   addItem('newItem');
  // };

  // useEffect(() => {
  //   console.log('EXAMPLE STAND: ', items);
  // }, [items]);

  // <TouchableOpacity onPress={exampleSubmission}>
  //   {!isAddingItem ? <Text>Example Button</Text> : <Text> Waiting ..</Text>}
  // </TouchableOpacity>;
