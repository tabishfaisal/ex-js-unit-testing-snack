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

function addPost(posts,post){
  const Ids = posts.map((post)=>post.id)
  const Slugs = posts.map((post)=>post.slug)
  if(Ids.includes(post.id)){
    throw new Error('id already exists')
  }
  if(Slugs.includes(post.slug)){
    throw new Error('slug already exists')
  }
  return posts.push(post)
}

function removePost(posts,id){
  const index = posts.findIndex((post)=>post.id === id)
  posts.splice(index,1)
}
  module.exports = {getInitials,createSlug,getMediaof,isPalindrome,findPostById,addPost,removePost}
