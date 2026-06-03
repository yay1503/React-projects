import React, { useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container,PostCard } from '../Index'
import { useEffect } from 'react'

function Home() {
    const [posts,setPosts] = useState([])

    useEffect(()=> {
        appwriteService.getPosts().then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

    if (posts.length === 0){
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post, index) => (
                        <React.Fragment key={post.$id}>
                            <div className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                            {index === 1 && (
                                <div className='p-2 w-1/2'>
                                    
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home