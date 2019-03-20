const apiKey = `${process.env.REACT_APP_GOOGLE_API_KEY}`;

const Google = {

  search(q, orderBy){
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&orderBy=${orderBy}&key=${apiKey}`
    ).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.items) {
        return jsonResponse.items.map(item => {
          return {
          id: item.id,
          // imageLinks: item.volumeInfo.imageLinks.thumbnail,
          imageLinks: ((item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : undefined),
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          // publisher: item.volumeInfo.publisher,
          publishedDate: item.volumeInfo.publishedDate,
          categories: item.volumeInfo.categories,
          // pageCount: item.volumeInfo.pageCount,
          averageRating: item.volumeInfo.averageRating,
          description: item.volumeInfo.description
          }
        })
      }
    })
  }
}



export default Google;
