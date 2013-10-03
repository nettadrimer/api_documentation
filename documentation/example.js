/**
 * @api {get} /reviews/get_reviews/ Get reviews of a specific place
 * @apiName get_reviews
 * @apiGroup Review
 * @apiVersion 0.3.0
 *
 * @apiparam {number} item_id id for the item you want to get reviews for
 * @apiparam {String} item_type type of the item you want to get reviews for
 * @apiparam {String} locale Locale for the reviews (defaults to en_US)
 * @apiparam {Number} https 0/1 whether you want https or not
 * @apiparam {Number} client_id Your client_id as given to you from Gogobot API team
 * @apiparam {String} signature Your calculated signature
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        status:200,
 *        result:{
 *           attribution_url:"http://www.gogobot.com/venetian-resort-hotel-casino-las-vegas-hotel",
 *           attribution_text:"Powered by Gogobot",
 *           attribution_logo:"http://cdn.gbot.me/img/api_assets/gogobot_logo.png",
 *           total_reviews:182,
 *           avg_rating:"4.25",
 *           avg_rating_image:"https://cdn.gbot.me/img/api_assets/four_half.gif",
 *           reviews:[
 *              {
 *                 review_id:3000000000054940,
 *                 rating_image:"https://cdn.gbot.me/img/api_assets/two.gif",
 *                 rating:"2.0",
 *                 review_text:"The Venetian Resort Hotel Casino is a glitzy resort, which consists of boutiques, restaurant...",
 *                 review_read_more:"http://www.gogobot.com/user/frances-nguyen/place/venetian-resort-hotel-casino-las-vegas-hotel",
 *                 reviewer_name:"Frances Nguyen",
 *                 reviewer_profile_photo:"https://cdn4.gbot.me/photos/E5/A5/1372102913/Frances_Nguyen-20000000005912739-75x75.jpg",
 *                 reviewer_profile_url:"http://www.gogobot.com/user/frances-nguyen",
 *                 review_date:"07/04/12"
 *              },
 *              {
 *                 review_id:3000000000220970,
 *                 rating_image:"https://cdn.gbot.me/img/api_assets/four.gif",
 *                 rating:"4.0",
 *                 review_text:"All suites hotels are great for a group of friends traveling and having a fun time together....",
 *                 review_read_more:"http://www.gogobot.com/user/mel-s-wong/place/venetian-resort-hotel-casino-las-vegas-hotel",
 *                 reviewer_name:"Mel S Wong",
 *                 reviewer_profile_photo:"https://cdn1.gbot.me/photos/I9/U5/1322768755/gogomels-20000000002211104-75x75.jpg",
 *                 reviewer_profile_url:"http://www.gogobot.com/user/mel-s-wong",
 *                 review_date:"07/05/12"
 *              },
 *              {
 *                 review_id:3000000000220427,
 *                 rating_image:"https://cdn.gbot.me/img/api_assets/five.gif",
 *                 rating:"5.0",
 *                 review_text:"Come to Lost Wages this time of year (June, in a bad economy) and you can get some deals, es...",
 *                 review_read_more:"http://www.gogobot.com/user/wanugee/place/venetian-resort-hotel-casino-las-vegas-hotel",
 *                 reviewer_name:"Wanugee",
 *                 reviewer_profile_photo:"https://cdn3.gbot.me/photos/LV/2z/1328165459/Wanugee_Kanagaki-20000000002482706-75x75.jpg",
 *                 reviewer_profile_url:"http://www.gogobot.com/user/wanugee",
 *                 review_date:"01/19/13"
 *              }
 *           ]
 *        }
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