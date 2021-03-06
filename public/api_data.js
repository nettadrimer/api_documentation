define({ api: [
  {
    "type": "get",
    "url": "/reviews/get_reviews/",
    "title": "Get Reviews",
    "name": "get_reviews",
    "group": "Review",
    "version": "0.3.0",
    "description": "Get highest ranked reviews for a specific place. Reviews returned from this API call are sorted based on the ranked score.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "field": "item_id",
            "optional": false,
            "description": "id for the item you want to get reviews for"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "item_type",
            "optional": false,
            "description": "type of the item you want to get reviews for"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "locale",
            "optional": false,
            "description": "Locale for the reviews (defaults to en_US)"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "https",
            "optional": false,
            "description": "0/1 whether you want https or not"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "client_id",
            "optional": false,
            "description": "Your client_id as given to you from Gogobot API team"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "signature",
            "optional": false,
            "description": "Your calculated signature"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n      status:200,\n      result:{\n         attribution_url:\"http://www.gogobot.com/venetian-resort-hotel-casino-las-vegas-hotel\",\n         attribution_text:\"Powered by Gogobot\",\n         attribution_logo:\"http://cdn.gbot.me/img/api_assets/gogobot_logo.png\",\n         total_reviews:182,\n         avg_rating:\"4.25\",\n         avg_rating_image:\"https://cdn.gbot.me/img/api_assets/four_half.gif\",\n         reviews:[\n            {\n               review_id:3000000000054940,\n               rating_image:\"https://cdn.gbot.me/img/api_assets/two.gif\",\n               rating:\"2.0\",\n               review_text:\"The Venetian Resort Hotel Casino is a glitzy resort, which consists of boutiques, restaurant...\",\n               review_read_more:\"http://www.gogobot.com/user/frances-nguyen/place/venetian-resort-hotel-casino-las-vegas-hotel\",\n               reviewer_name:\"Frances Nguyen\",\n               reviewer_profile_photo:\"https://cdn4.gbot.me/photos/E5/A5/1372102913/Frances_Nguyen-20000000005912739-75x75.jpg\",\n               reviewer_profile_url:\"http://www.gogobot.com/user/frances-nguyen\",\n               review_date:\"07/04/12\"\n            },\n            {\n               review_id:3000000000220970,\n               rating_image:\"https://cdn.gbot.me/img/api_assets/four.gif\",\n               rating:\"4.0\",\n               review_text:\"All suites hotels are great for a group of friends traveling and having a fun time together....\",\n               review_read_more:\"http://www.gogobot.com/user/mel-s-wong/place/venetian-resort-hotel-casino-las-vegas-hotel\",\n               reviewer_name:\"Mel S Wong\",\n               reviewer_profile_photo:\"https://cdn1.gbot.me/photos/I9/U5/1322768755/gogomels-20000000002211104-75x75.jpg\",\n               reviewer_profile_url:\"http://www.gogobot.com/user/mel-s-wong\",\n               review_date:\"07/05/12\"\n            },\n            {\n               review_id:3000000000220427,\n               rating_image:\"https://cdn.gbot.me/img/api_assets/five.gif\",\n               rating:\"5.0\",\n               review_text:\"Come to Lost Wages this time of year (June, in a bad economy) and you can get some deals, es...\",\n               review_read_more:\"http://www.gogobot.com/user/wanugee/place/venetian-resort-hotel-casino-las-vegas-hotel\",\n               reviewer_name:\"Wanugee\",\n               reviewer_profile_photo:\"https://cdn3.gbot.me/photos/LV/2z/1328165459/Wanugee_Kanagaki-20000000002482706-75x75.jpg\",\n               reviewer_profile_url:\"http://www.gogobot.com/user/wanugee\",\n               review_date:\"01/19/13\"\n            }\n         ]\n      }\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "The id of the User was not found."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"UserNotFound\"\n   }\n"
        }
      ]
    },
    "filename": "documentation/get_reviews.js"
  },
  {
    "type": "get",
    "url": "/search/nearby_search/",
    "title": "Nearby Search",
    "name": "search_nearby",
    "group": "Search",
    "version": "0.3.0",
    "description": "User Gogobot search index in order to search places nearby a specific lat/lng",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "query",
            "optional": false,
            "description": "Your search query"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "lat",
            "optional": false,
            "description": "Lattitude"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "field": "lng",
            "optional": false,
            "description": "Longtitude"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "type",
            "optional": false,
            "description": "Use this to restrict your search (can be: 'Hotel', 'Restaurant', 'Attraction')"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort",
            "optional": false,
            "description": "How you want the results to be sorted (can be: best_match / distance / rating)"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "page",
            "optional": false,
            "description": "page number"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "page_size",
            "optional": false,
            "description": "Size of each page (defaults to 15)"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "locale",
            "optional": false,
            "description": "Locale for the search results"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "https",
            "optional": false,
            "description": "0/1 whether you want https or not"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "client_id",
            "optional": false,
            "description": "Your client_id as given to you from Gogobot API team"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "signature",
            "optional": false,
            "description": "Your calculated signature"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n      status:200,\n      attribution_url:\"http://dev.gogobot.com\",\n      attribution_text:\"Powered by Gogobot\",\n      attribution_logo:\"http://cdn.gbot.me/img/api_assets/gogobot_logo.png\",\n      results:[\n         {\n            id:\"5000000057902\",\n            type:\"Hotel\",\n            name:\"W San Francisco\",\n            review_count:59,\n            avg_rating:4,\n            avg_rating_img:\"https://cdn.gbot.me/img/api_assets/four.gif\",\n            url:\"http://dev.gogobot.com/w-san-francisco-san-francisco-hotel\",\n            description:null,\n            address:{\n               address:\"181 Third Street, San Francisco, CA 94103\",\n               lat:37.7852227,\n               lng:-122.4006331\n            },\n            categories:[\n               {\n                  id:\"5000000000000000000\",\n                  name:\"Hotels and Resorts\"\n               }\n            ],\n            cuisines:[\n   \n            ],\n            book_url:\"https://secure.booking.com/book.html?aid=348526&hostname=m.booking.com&stid=325542&hotel_id=58525&label=ios\",\n            photo:{\n               thumb_url:\"https://cdn2.gbot.me/photos/wR/vA/1285206140/W_Hotel_Lobby__Third_Floo-W_San_Francisco-5000000057902-120x80.jpg\",\n               attribution_username:\"John C Abell\",\n               attribution_url:\"http://www.flickr.com/photos/33529090@N00/4863563227\",\n               attribution_name:\"Flickr\",\n               is_landscape:true\n            },\n            distance:0\n         },\n         {\n            id:\"3000000013125\",\n            type:\"Attraction\",\n            name:\"SF MoMA \",\n            review_count:72,\n            avg_rating:4.5,\n            avg_rating_img:\"https://cdn.gbot.me/img/api_assets/four_half.gif\",\n            url:\"http://dev.gogobot.com/sf-moma-san-francisco-attraction\",\n            description:null,\n            address:{\n               address:\"151 3rd Street, San Francisco, CA 94103-3107\",\n               lat:37.7856878,\n               lng:-122.4011956\n            },\n            categories:[\n               {\n                  id:\"5000000000000000006\",\n                  name:\"Sights and Museums\"\n               },\n               {\n                  id:\"5000000000000000025\",\n                  name:\"Art Museum\"\n               }\n            ],\n            cuisines:[\n   \n            ],\n            book_url:null,\n            photo:{\n               thumb_url:\"https://cdn4.gbot.me/photos/lg/QF/1291663257/At_the_SF_MOMA-MoMA__San_Francisco__CA_9-20000000001542627-120x80.jpg\",\n               attribution_username:\"wonderyort\",\n               attribution_url:\"http://www.flickr.com/photos/11112304@N00/3950815723\",\n               attribution_name:\"Flickr\",\n               is_landscape:true\n            },\n            distance:0\n         }\n      ]\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "The id of the User was not found."
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"UserNotFound\"\n   }\n"
        }
      ]
    },
    "filename": "documentation/nearby_search.js"
  }
] });