import React from 'react'
import ApiPrintList from './ApiPrintList';
const ApiList = () => {
  const posts = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati ",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur "
  },
  {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil"
  },
  {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptate"
  }
  ]
  return posts.map(post => 
    <ApiPrintList key = {post.id} post={post}/>
  );
}

export default ApiList

