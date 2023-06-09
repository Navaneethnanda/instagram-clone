"use client";
import { useEffect,useState } from 'react';
import { faker } from '@faker-js/faker';
import Story from './Story';



export default function Stories(){
    const [storyData,setStoryData]= useState([])

    useEffect(() => {
         const Suggestion=[...Array(20)].map((_, i) => ({
                username: faker.internet.userName(),
                avatar: faker.image.avatar()
              }));
        

setStoryData([...Suggestion]);
      }, []);


    return (

<div className='bg-white flex space-x-2 mt-8 border-gray-600 overflow-scroll p-6'>
    {
        storyData.map((_,i)=>(<Story key={i} name={storyData[i].username} avatar={storyData[i].avatar}/>))
    }


{/* Story */}
{/* Story */}
{/* Story */}
{/* Story */}
{/* Story */}
{/* Story */}
{/* Story */}

</div>
    );
}
