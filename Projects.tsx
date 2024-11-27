import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: 'Static Interactive Resume',
        dec:"A TypeScript -based interactive resume built with React,HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/project-1.jpg",
        tags: ["React", "Nextjs","HTML" ,"CSS"],
    },
    {
        id: 1,
        title: 'Currency Converter Project',
        dec: "A Simple HTML and TypeScript powerd tool for converting currencies with real-time rates.",
        img:"/project-2.jpg",
        tags: ["HTML","CSS","TypeScript", "Node"],
    },
    {
        id: 2,
        title:'Simple Calculator',
        dec:"A Simple calculator built with HTML,CSS and TyeScript handling basic arithmetic operations. ",
        img: "/project-3.png",
        tags: ["Node.js","HTML","CSS","TypeScript"],
    },
];
const projects = () => {
  return (
        
        <div id='projects'className='container pt-32'>
<Heading title='My Projects'/>
<div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
    {data.map((el) => (
        <Card
    key={el.id}
    title={el.title}
    dec={el.dec}
    img={el.img}
    tags={el.tags}
  />
  ))}
</div>
    </div>
  );
};

export default projects;