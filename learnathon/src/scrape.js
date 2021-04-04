import axios from "axios";
import cherrio from "cheerio";

async function getHTML(productURL) {
  try {
    const { data: html } = await axios.get(
      productURL,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
    return html;
  } catch (error) {
    console.log(error);
  }

  // const {data: html} = () => {
  //     return new Promise(function(resolve, reject){
  //         axios.get(`https://cors-anywhere.herokuapp.com/`+productURL, {
  //           headers: {
  //             'Access-Control-Allow-Origin' : '*',
  //             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //           }
  //         }).then(res => {
  //           resolve(res);
  //         })
  //     })
  // }
  // console.log("HTML: " + html)
  // return html;
}

async function getConsole(html) {
  try {

  html = html.toString();
  const $ = await cherrio.load(html)
  
  const span = $('jqconsole-header')
  return span.html();
  } catch (error) {}
}


export { getHTML, getConsole };