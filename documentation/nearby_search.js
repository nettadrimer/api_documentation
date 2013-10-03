/**
 * @api {get} /search/nearby_search/ Nearby Search
 * @apiName search_nearby
 * @apiGroup Search
 * @apiVersion 0.3.0
 * @apiDescription User Gogobot search index in order to search places nearby a specific lat/lng
 *
 * @apiparam {String} query Your search query
 * @apiparam {Float} lat Lattitude
 * @apiparam {Float} lng Longtitude
 * @apiparam {String} type Use this to restrict your search (can be: 'Hotel', 'Restaurant', 'Attraction')
 * @apiparam {String} sort How you want the results to be sorted (can be: best_match / distance / rating)
 * @apiparam {Number} page page number
 * @apiparam {Number} page_size Size of each page (defaults to 15)
 * @apiparam {String} locale Locale for the search results
 * @apiparam {Number} https 0/1 whether you want https or not
 * @apiparam {Number} client_id Your client_id as given to you from Gogobot API team
 * @apiparam {String} signature Your calculated signature
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        status:200,
 *        attribution_url:"http://dev.gogobot.com",
 *        attribution_text:"Powered by Gogobot",
 *        attribution_logo:"http://cdn.gbot.me/img/api_assets/gogobot_logo.png",
 *        results:[
 *           {
 *              id:"5000000057902",
 *              type:"Hotel",
 *              name:"W San Francisco",
 *              review_count:59,
 *              avg_rating:4,
 *              avg_rating_img:"https://cdn.gbot.me/img/api_assets/four.gif",
 *              url:"http://dev.gogobot.com/w-san-francisco-san-francisco-hotel",
 *              description:null,
 *              address:{
 *                 address:"181 Third Street, San Francisco, CA 94103",
 *                 lat:37.7852227,
 *                 lng:-122.4006331
 *              },
 *              categories:[
 *                 {
 *                    id:"5000000000000000000",
 *                    name:"Hotels and Resorts"
 *                 }
 *              ],
 *              cuisines:[
 *     
 *              ],
 *              book_url:"https://secure.booking.com/book.html?aid=348526&hostname=m.booking.com&stid=325542&hotel_id=58525&label=ios",
 *              photo:{
 *                 thumb_url:"https://cdn2.gbot.me/photos/wR/vA/1285206140/W_Hotel_Lobby__Third_Floo-W_San_Francisco-5000000057902-120x80.jpg",
 *                 attribution_username:"John C Abell",
 *                 attribution_url:"http://www.flickr.com/photos/33529090@N00/4863563227",
 *                 attribution_name:"Flickr",
 *                 is_landscape:true
 *              },
 *              distance:0
 *           },
 *           {
 *              id:"3000000013125",
 *              type:"Attraction",
 *              name:"SF MoMA ",
 *              review_count:72,
 *              avg_rating:4.5,
 *              avg_rating_img:"https://cdn.gbot.me/img/api_assets/four_half.gif",
 *              url:"http://dev.gogobot.com/sf-moma-san-francisco-attraction",
 *              description:null,
 *              address:{
 *                 address:"151 3rd Street, San Francisco, CA 94103-3107",
 *                 lat:37.7856878,
 *                 lng:-122.4011956
 *              },
 *              categories:[
 *                 {
 *                    id:"5000000000000000006",
 *                    name:"Sights and Museums"
 *                 },
 *                 {
 *                    id:"5000000000000000025",
 *                    name:"Art Museum"
 *                 }
 *              ],
 *              cuisines:[
 *     
 *              ],
 *              book_url:null,
 *              photo:{
 *                 thumb_url:"https://cdn4.gbot.me/photos/lg/QF/1291663257/At_the_SF_MOMA-MoMA__San_Francisco__CA_9-20000000001542627-120x80.jpg",
 *                 attribution_username:"wonderyort",
 *                 attribution_url:"http://www.flickr.com/photos/11112304@N00/3950815723",
 *                 attribution_name:"Flickr",
 *                 is_landscape:true
 *              },
 *              distance:0
 *           }
 *        ]
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */