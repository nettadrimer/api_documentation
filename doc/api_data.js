define({ api: [
  {
    "type": "get",
    "url": "/reviews/get_reviews/",
    "title": "Get reviews of a specific place",
    "name": "get_reviews",
    "group": "Review",
    "version": "0.3.0",
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
    "filename": "documentation/example.js"
  }
] });