import React from 'react';

function sentBox() {


   const  DUMMY_DATA = [
        {
            id: 't1',
            title: "LinkedIn",
            description: "Blu Ocean Innovations pvt ltd",
            content: "It was an honour to be invited at Arun Jaitley National Institute of Financial Management ",

        },
        {
            id: 't2',
            title: "Uber",
            description: "Ride on your schedule, Ayesha",
            content: "Request a trip when you're ready and get to your destination comfortably and stress-free.",
        },
    ];

  return (
    <>
      <ul>
        {DUMMY_DATA.map((item) => (
           <li key={item.id} className='bg-white m-2 p-1 rounded hover:bg-slate-200'>
            {item.title} - {item.description} - {item.content}
           </li> 
        ))}
      </ul>
    </>
  )
}

export default sentBox;