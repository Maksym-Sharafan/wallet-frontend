const styles = isLoader => {
  return {
    currencyContainer: {
      position: 'relative',
      backgroundColor: isLoader ? 'transparent' : '#4A56E2',
      borderRadius: 30,
      width: 280,
      height: 174,
      '@media(min-width: 768px)': {
        width: 334,
      },
      '@media(min-width: 1280px)': {
        width: 348,
        height: 347,
      },
    },
    linerContainer: {
      position: 'absolute',
      left: 0,
      bottom: 0,
    },
    loader: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    tableContainer: {
      borderRadius: '30px',
    },

    tableHead: {
      backgroundColor: '#6E78E8',
      borderRadius: 30,
    },
    tableTitle: {
      '&:nth-child(2n+1)': {
        padding: '12px 16px',
      },
      '@media(min-width: 768px)': {
        '&:nth-child(2n+1)': {
          padding: '12px 20px',
        },
      },
      '@media(min-width: 1280px)': {
        '&:nth-child(2n+1)': {
          padding: '17px 28px',
        },
      },
      padding: 0,
      fontFamily: 'Circe',
      fontStyle: 'normal',
      fontSize: 18,
      lineHeight: '27px',
      fontWeight: 'bold',
      color: '#ffffff',
      borderBottom: 0,
    },
    tableBody: {
      backgroundColor: '#4A56E2',
      color: '#4A56E2',
    },
    bodyData: {
      padding: '10px 20px 0px',
      '@media(min-width: 1280px)': {
        padding: '21px  28px 0px 28px',
      },
      fontFamily: 'Circe',
      fontStyle: 'normal',
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 'normal',
      color: '#ffffff',
      borderBottom: 0,
    },
  };
};

export default styles;
