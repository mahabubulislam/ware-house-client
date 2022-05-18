import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl underline underline-offset-8 text-center'>Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 my-5 p-5'>
                <div className='p-3 mx-3 text-justify'>
                    <h3 className='text-2xl text-center my-5'> Difference between Javascript and Nodejs</h3>
                    <p><span className='font-bold'>JavaScript: </span>Javascript is a programming language. It runs on browser. It is scripting language. Javascript is a high level programming language. JavaScript use for frontend development</p>
                    <p><span className='font-bold'>Nodejs: </span>Node js is an open source javascript runtime environment. It runs on v8 engine. It use for server site development.</p>
                </div>
                <div className='p-3 mx-3 text-justify'>
                    <h3 className='text-2xl text-center my-5'>When should you use nodejs and when should you use mongodb</h3>
                    <p><span className='font-bold'>Nodejs: </span>When I build realtime applications, online gaming etc. Because nodejs is it is single threaded. </p>
                    <p><span className='font-bold'>MongoDB: </span>MongoDb is a no sql database. I use mongodb in this type of web application their many users but who do not interact with each other. </p>
                </div>
                <div className='p-3 mx-3 text-justify'>
                    <h3 className='text-2xl text-center my-5'>Differences between sql and nosql databases.</h3>
                    <p><span className='font-bold'>SQL: </span>SQL  is a structure query language.  SQL databases are primarily called as Relational Databases (RDBMS). SQL database use table.It has dynamic static or fixed schema. SQL databases are vertically scalable</p>
                    <p><span className='font-bold'>NoSQL: </span>NoSQL is non relational query language. MongoDb is a no sql database. NoSQL use collection. It has dynamic schema. SQL databases are horizontaly scalable</p>
                </div>
                <div className='p-3 mx-3 text-justify'>
                    <h3 className='text-2xl text-center my-5'>What is the purpose of jwt and how does it work?</h3>
                    <p><span className='font-bold'>JWT: </span> JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;