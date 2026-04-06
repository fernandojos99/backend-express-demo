export const handler = async (event) => {
    console.log("EVENT:", JSON.stringify(event));
  
    try {
      const path = event.apiPath;
      const method = event.httpMethod;
  
      const body = event.requestBody?.content?.["application/json"] || {};
      const params = event.pathParameters || {};
  
      // GET /posts
      if (path === "/posts" && method === "GET") {
        const res = await fetch("https://9c80-187-189-145-54.ngrok-free.app/posts");
        return {
          statusCode: 200,
          body: await res.json()
        };
      }
  
      // POST /posts
      if (path === "/posts" && method === "POST") {
        const res = await fetch("https://9c80-187-189-145-54.ngrok-free.app/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: body.title,
            content: body.content
          })
        });
  
        return {
          statusCode: 201,
          body: await res.json()
        };
      }
  
      // GET /posts/user/{userId}
      if (path === "/posts/user/{userId}" && method === "GET") {
        const res = await fetch(`https://9c80-187-189-145-54.ngrok-free.app/posts/user/${params.userId}`);
  
        return {
          statusCode: 200,
          body: await res.json()
        };
      }
  
      // GET /users
      if (path === "/users" && method === "GET") {
        const res = await fetch("https://9c80-187-189-145-54.ngrok-free.app/users");
  
        return {
          statusCode: 200,
          body: await res.json()
        };
      }
  
      // GET /users/{id}
      if (path === "/users/{id}" && method === "GET") {
        const res = await fetch(`https://9c80-187-189-145-54.ngrok-free.app/users/${params.id}`);
  
        return {
          statusCode: 200,
          body: await res.json()
        };
      }
  
      return {
        statusCode: 400,
        body: { error: "Ruta no soportada" }
      };
  
    } catch (error) {
      console.error(error);
  
      return {
        statusCode: 500,
        body: { error: "Error en Lambda" }
      };
    }
  };