const numberHandler = (number) => {
      // ⏲️ CONVERT NUMBERS FORMATS 

    const formatter = Intl.NumberFormat('en', { notation: 'compact' })
    let n = formatter.format(number);
    return n

}
export default numberHandler