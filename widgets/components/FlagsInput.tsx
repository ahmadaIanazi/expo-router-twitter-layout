<Modal
  animationType='fade'
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <TouchableOpacity style={styles.modalBackground} onPress={() => setModalVisible(false)}>
    <View style={styles.modalContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.option}
          onPress={() => handleOptionPress(option)}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Image style={{ height: 30, width: 30, marginEnd: 10 }} source={option.icon} />

            <Text style={txt.h4}>{option.en}</Text>
            <Text style={txt.h6l}> {option.code}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  </TouchableOpacity>
</Modal>;
