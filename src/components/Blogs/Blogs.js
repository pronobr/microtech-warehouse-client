import React from 'react';

const Blogs = () => {
    return (
        <div className='text-start container'>
        <h2 className='my-5'>Questions</h2>
        <div className="q1">
        <h2>Difference between javascript and nodejs</h2>
        <p className='w-50'>JavaScript is executed in the browser whereas using Node.javascript gives us the ability to execute JavaScript outside the browser.
        JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end
         development that is server-side development.JavaScript follows the standard of JavaScript when writing programs whereas Node.
         javascript is written in C++ while using the v8 engine, it runs JavaScript outside the browser.
         JavaScript is a proper high-level programming language used to create web scripts whereas Node.
         javascript is a run time environment built on google s v8 engine.
        </p>
        </div>
        <div className="q2">
        <h2>What is the purpose of jwt and how does it work</h2>
        <p  className='w-50'>An important part of token-based authentication is the expiration of JWTs. The security of this pattern relies heavily on JWTs being short-lived.
             Remember that access tokens are credentials. If I have an access token that says I am you, as far as the server is concerned I am you. To reduce the threat of an intercepted access token,
              JWT access tokens are usually set to expire quickly after being issued.
             Five minutes is a common lifetime for an access token. For that reason, a second token is often issued to an authorized user: the refresh token.
             This token has a longer life, and must be stored by the authorizing server.

        </p>
        </div>
        <div className="q2">
        <h2>What is the purpose of jwt and how does it work</h2>
        <p  className='w-50'>SQL is also pronounced as “S-Q-L” or as “See-Quel” and is primarily known to be a Relational Database.
        Database, here is in table format.SQL uses specialized DB hardware to enhance performance.They are scalable vertically.
        and NoSQL is a distributed or Non-relational Database.NoSQL databases are document based with key-value pairs and graph databases.
        These are horizontally scalable.Dynamic schema is used for unstructured or disorganised data

        </p>
        </div>

        </div>
    );
};

export default Blogs;