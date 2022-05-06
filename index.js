//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY
const api = "AIzaSyAXGwIiUb5XCqKLJzaaSXR4vz7_t5Bi6gQ";

//console.log("hii");

let trendinghvideos = async () => {
  try {
   

    const res1 = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=trending%202&key=AIzaSyAXGwIiUb5XCqKLJzaaSXR4vz7_t5Bi6gQ`
    );

    const data1 = await res1.json();
    append(data1.items);
    console.log("data1", data1.items);
  } catch (err) {
    console.log(err);
  }
};

trendinghvideos();








let vid;
let searchvideos = async () => {
  try {
    let q = document.getElementById("query").value;

    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}%202&key=${api}`
    );

    const data = await res.json();
    append(data.items);
    console.log("daa", data.items);
  } catch (err) {
    console.log(err);
  }
};



  

const append = (videos) => {
  console.log("videos", videos);
  localStorage.setItem("videos", JSON.stringify(videos));
  let show_videos = document.getElementById("show_videos");
  show_videos.innerHTML = null;

  videos.forEach(
    ({
      snippet: {
        thumbnails: {
          high: { url },
        },
      },
      snippet: { title },
      id: { videoId },
    }) => {
      //console.log(default);
      let div = document.createElement("div");

      let image = document.createElement("img");
      image.src = url;
      image.id = "thumb";

      let iframe = document.createElement("iframe");

      iframe.src = `https://www.youtube.com/embed/${videoId}`;

      // iframe.allow = "fullscreen";
       let frame=`https://www.youtube.com/embed/${videoId}`

      let name = document.createElement("h5");
      name.innerText = title;

      div.append(image, name);
      show_videos.append(div);
      div.addEventListener("click", function () {
        // console.log(iframe);
        // let obj={
        // key:frame,
        // }

        // localStorage.setItem("frames",JSON.stringify(obj) )

        
        console.log(frame);
        startvideo(frame);

        //show(iframe);
        // let ab = document.createElement("a");
        // ab.setAttribute("href", "show.html");
        // ab.append(div);
        // let div2 = document.createElement("div");
        // div2.append(iframe);
        // // console.log(div2);
        // let v = document.getElementById("videos");
        // v.append(iframe);
      });
    }
  );
};
let a=JSON.parse(localStorage.getItem("videos"))
  append(a);
// vid.innerHTML="My name is khan";
// console.log(vid);

function startvideo(d) {
  //let arr=[];
  let obj=null
  console.log("data;", d);
   obj={
        key:d,
        }

        // arr.push(obj);
        // console.log(arr);
localStorage.setItem("start",JSON.stringify(obj));

window.location.href = "show.html";
showapp();
  // vid.innerHTML=null;
  // console.log("data:", data);
  // let div5 = document.createElement("div");

  // div5.append(d);
  // console.log(div5);

  //  document.querySelector("#cotainer").append(div5);
}




//vid.innerText = "My name is lakhan";
