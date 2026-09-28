# Debugging Notes
Debugging Notes

I used the Network tab in Safari Web Inspector to check the API request.

The request was sent to:

https://jsonplaceholder.typicode.com/users

The request method was GET and when the API URL was correct, the status code was 200.

I also tested the Error State by changing /users to /user. The request failed, and I could see the failed request and its status code in the Network tab.

The Network tab helped me understand whether the problem was related to the API request or my JavaScript code. It also allowed me to check the Request URL, Method, Status Code, and Response.