import React from "react";
const headingstyle = { fontWeight: "bold" };

// {
//   /* The following line can be included in your src/index.js or App.js file */
// }
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Hello World</h1>
        <div
          style={{
            backgroundColor: "#15876A",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2 style={headingstyle}>
            Certified Web 3.0 and Metaverse Developer:
            <br /> A Nationwide Program in Karachi, Lahore,
            <br /> Islamabad, and Peshawar
          </h2>
          <h6>
            Getting Ready for the Next Generation and Future of the Internet -
            Join a 13 Trillion Dollar Industry with 5 Billion Users
          </h6>
        </div>
        <div style={{ textAlign: "center", color: "Green" }}>
          <h3>
            Certified Web 3.0 and Metaverse Developer: A
            <br /> Nationwide Program in Karachi, Lahore,
            <br /> Islamabad, and Peshawar
          </h3>
        </div>
        <div></div>

        <h4>video form youtube link</h4>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/0Zn-2ZfLjjA?si=17p20PfYgZ6pY6Q_"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h4>video from own PC</h4>
        <h1>Welcome to My Video Page</h1>

        <video width="640" height="360" controls>
          <source src="/How_React_Gatsby.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
