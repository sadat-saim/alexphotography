import React from "react";
import useTitle from "../utils/useTitle";

const Blogs = () => {
  useTitle("blogs");
  return (
    <div>
      <article className="mx-3 my-3 bg-gray-100 p-3">
        <h1>Difference between SQL and NoSQL?</h1>
        <p>
          NoSQL (“non SQL” or “not only SQL”) databases were developed in the
          late 2000s with a focus on scaling, fast queries, allowing for
          frequent application changes, and making programming simpler for
          developers. Relational databases accessed with SQL (Structured Query
          Language) were developed in the 1970s with a focus on reducing data
          duplication as storage was much more costly than developer time. SQL
          databases tend to have rigid, complex, tabular schemas and typically
          require expensive vertical scaling.
        </p>
      </article>
      <article className="mx-3 my-3 bg-gray-100 p-3">
        <h1>What is JWT, and how does it work?</h1>
        <p>
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP).Basically the identity
          provider(IdP) generates a JWT certifying user identity and Resource
          server decodes and verifies the authenticity of the token using secret
          salt / public key.
        </p>
      </article>
      <article className="mx-3 my-3 bg-gray-100 p-3">
        <h1>What is the difference between javascript and NodeJS?</h1>
        <p>
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node.js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language. It requires libraries that can be
          conveniently accessed from JavaScript programming to be more helpful.
        </p>
      </article>
      <article className="mx-3 my-3 bg-gray-100 p-3">
        <h1>How does NodeJS handle multiple requests at the same time?</h1>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </article>
    </div>
  );
};

export default Blogs;
