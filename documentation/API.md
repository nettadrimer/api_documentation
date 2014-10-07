# Get Started

At Gogobot, we’ve released a few API’s that provide access to some of our great travel and review content. Our API’s are available to registered partners at no cost. We can’t wait to see what you build!

## Step 1: Register

Download and email a signed *API License Agreement* to developersignup@gogobot.com. After review, we’ll assign a client_id and secret_key for your application.

*[Content License Agreement](https://drive.google.com/file/d/0B2GIbeh3a3RnZF9QTjREYkZ2SlU/edit?usp=sharing)*

## Step 2: Get a Signature

secret_key to generate a signature. All requests to the Gogobot API require a client_id and signature.
Step 3: Start Making Requests!

Now it’s time to start making requests to our endpoints with your shiny new client_id and signature!


## Step 3: Create the Signature
All requests to the Gogobot API require the use of a client_id and signature.
Testing and Production Environments

A different client_id and secret_key will be provided by Gogobot for testing and production environments.
Algorithm

Concatenate all params and values (in alphabetical order, removing ‘=’ and ‘&’ chars). This is the payload. Note: Make sure that none of the param values are URL encoded.

Perform an hmac-sha256 of the payload (using the secret_key provided by Gogobot)

Perform a Base64 of the above result. Make sure the signature is url encoded.

In summary: Base64( HMAC-SHA256(secret_key, payload) )

#### Example API Call with Signature
This assumes that the secret key is “12345”

http://api.gogobot.com/api/v3/reviews/get_reviews.json?item_id=5000000067059&item_type=Hotel&client_id=CLIENT_ID&signature=HHU%2BfgkhI3AyGAS1wPFmPJE6wiB5uyyOHUNPTQ%2BgtjM%3D

The signature is calculated by performing a Base64 and hmac-sha256 of the contactenated param string (payload): “client_idCLIENT_IDitem_id5000000067059item_typeHotel”.

Note: Please make sure to strip any trailing newline characters from the resulting signature. The signature should be url encoded.

#### Sample Code for Obtaining Signature
Here are two sample codes for obtaining the signature:

### Java Sample Code for Signature

  public String apiSignatureFromURL(URI url, Map<String, Object> postMaps) {
    String returnValue = "";
    List<NameValuePair> query = null;

    ArrayList<String> params = new ArrayList<String>();

    params.add("client_id" + OAUTH_CLIENT_ID);

    // get request
    if (postMaps == null && url != null && url.getQuery() != null) {
      query = URLEncodedUtils.parse(url, "utf-8");
      for (int i = 0; i < query.size(); i++) {
        String val = query.get(i).getValue();
        // the parameter is not a blank string or null
        if (val != null && !val.equals("")) {
          params.add(query.get(i).getName() + query.get(i).getValue());
        }
      }
      } else if (postMaps != null) {
        Object[] keySet = postMaps.keySet().toArray();
        for (int i = 0; i < keySet.length; i++) {
          String key = (String) keySet[i];

          String value = (String) postMaps.get(key);
          if (value != null && !value.equals("")) 
          {
            params.add(key + postMaps.get(key));
          }
        
        }
      }

      Collections.sort(params);

      params.add(OAUTH_CLIENT_SECRET);

      for (int i = 0; i < params.size(); i++) {
        returnValue = returnValue + params.get(i);
      }

      String ret  = null;
    
      try {
        ret = this.encodeHMAC(this.OAUTH_CLIENT_SECRET, returnValue);
        } catch (Exception e) {
          e.printStackTrace();
        }
    
        return ret;
      }
    }
  }


#### iOS Sample Code for Signature

  - (NSString *)apiSignatureFromRequest:(NSURLRequest *)request {
    NSMutableDictionary *params;
  
    NSURL *url = [request URL];
    
    if (![[request HTTPMethod] isEqualToString:@"POST"])
    params = [url query] ? [[[url query] httpParams] mutableCopy] : [NSMutableDictionary dictionary];
  
    [params setValue:GOGOBOT_OAUTH_CLIENT_ID forKey:@"client_id"];
      
    NSMutableString* signature = [NSMutableString stringWithCapacity:512];
    NSArray* keys = [params.allKeys sortedArrayUsingSelector:@selector(caseInsensitiveCompare:)];
    for (id key in [keys objectEnumerator]) {
      id value = [params valueForKey:key];
      if ([value isKindOfClass:[NSString class]]) {
        [signature appendFormat:@"%@%@", key, value];
      }
    }
    [signature appendString:GOGOBOT_OAUTH_CLIENT_SECRET];
  
    const char *cKey  = [GOGOBOT_OAUTH_CLIENT_SECRET     
    cStringUsingEncoding:NSUTF8StringEncoding];
    const char *cData = [signature cStringUsingEncoding:NSUTF8StringEncoding];

    unsigned char cHMAC[CC_SHA256_DIGEST_LENGTH];
    
    CCHmac(kCCHmacAlgSHA256, cKey, strlen(cKey), cData, strlen(cData), cHMAC);
    NSData *HMAC = [[NSData alloc] initWithBytes:cHMAC length:sizeof(cHMAC)];

    //NSData-Base64: https://github.com/l4u/NSData-Base64
    return [HMAC base64EncodedString];
  }
  
## Support

Have a comment or question? Feel free to email us anytime for API support at [api@gogobot.com](mailto:api.gogobot.com).