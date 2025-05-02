function getInitials(fullName) {
    return fullName
      .split(' ')
      .map(word => word[0].toUpperCase())
      .join('');
  }

function createSlug(str){
  if (!str || typeof str !== "string" || str.trim() === "") {
    throw new Error("Invalid");
  }
    return str.toLowerCase().replaceAll(' ','-')
}

function getMediaof(arr){
  return arr.reduce((acc,cur)=>acc+cur,0) / arr.length
}

function isPalindrome(word){
  const reversedWord = word.trim().split('').reverse().join('')
  return word.trim() === reversedWord
}


function findPostById(posts,id){
  if(isNaN(id)){
    throw new Error(`"${id}" is invalid`)
  }
  posts.forEach(post => {
    if(
      post.id === undefined || post.title === undefined ||
      post.slug === undefined
    ){
      throw new Error('Post format is incorrect')
    }
    
  });
  return posts.find((post)=>post.id === id) || null
}
  module.exports = {getInitials,createSlug,getMediaof,isPalindrome,findPostById}
