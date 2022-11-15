const customFetch = ({data, stallTime = 0, id, cat}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            if (data){
                if(id){
                    const item = data.find((aa)=> aa.id === id)
                    resolve(item)
                } else if(cat) {
                    const categoryList = data.filter((aa)=> aa.category === cat)
                    resolve(categoryList)
                } else {
                    resolve(data)
                }

            }
        } catch (error) {
            reject(error);
        }
    }, stallTime)

   }
  );
};


export default customFetch 
