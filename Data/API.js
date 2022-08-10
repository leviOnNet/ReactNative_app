const getArticlesFromApi = async () => {

    try {
        let response = await fetch(
            'https://api.chucknorris.io/jokes/categories'
          );
          let json = await response.json();
          return json;
    } catch (error) {
        console.error(error)
    }
    
  }
