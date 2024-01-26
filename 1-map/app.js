const data = [
    {id:1, name: 'Vasya'},
    {id:2, name: 'Vasya'},
    {id:3, name: 'Petya'},
    ];
    
    const res =[];
    
      const uniqueValuesFromArray = (arr) => {
         return Array.from( new Set(arr.map(it => it.name)), el => arr.find(m => m.name == el ));
      }
    console.log(uniqueValuesFromArray(data));