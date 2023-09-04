export function generateNumericUUID(length = 32) {
    let uuid = '';
    const characters = '0123456789';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters.charAt(randomIndex);
    }
  
    return uuid;
  }
  
