export const fetchQuote = async () => {
    let url = 'https://binaryjazz.us/wp-json/genrenator/v1/story/1';
    let response = await fetch(url);
    let data = await checkForErrors(response);
    return data;
  };

  
export const checkForErrors = response => {
    if (response.status === 404) {
      throw new Error('Oops, something went wrong. Please check back later.');
    } else if (response.status === 500) {
      throw new Error(
        "Well this is embarrassing... our servers seem to be down, please check back later!"
      );
    } else if (response.ok) {
      return response.json();
    } else {
      throw new Error('Oops, something went wrong. Please try again!');
    }
  };