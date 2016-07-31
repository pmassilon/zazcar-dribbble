import Ember from 'ember';

let pictures = [
  {
    "id": 2868083,
    "title": "Bierhaus Project",
    "description": "<p>It's been a while for this project, but this last week I created the post about it in behance.</p>\n\n<p>You can see it attached or in Behance: <a href=\"https://www.behance.net/gallery/41071801/Bierhaus-Brewing-Co-2015\" rel=\"noreferrer\">https://www.behance.net/gallery/41071801/Bierhaus-Brewing-Co-2015</a></p>",
    "width": 400,
    "height": 300,
    "images": {
      "hidpi": "https://d13yacurqjgara.cloudfront.net/users/60266/screenshots/2868083/bierhaus_behance_shot-03.jpg",
      "normal": "https://d13yacurqjgara.cloudfront.net/users/60266/screenshots/2868083/bierhaus_behance_shot-03_1x.jpg",
      "teaser": "https://d13yacurqjgara.cloudfront.net/users/60266/screenshots/2868083/bierhaus_behance_shot-03_teaser.jpg"
    },
    "views_count": 2414,
    "likes_count": 243,
    "comments_count": 19,
    "attachments_count": 1,
    "rebounds_count": 0,
    "buckets_count": 18,
    "created_at": "2016-07-29T17:54:16Z",
    "updated_at": "2016-07-30T16:33:34Z",
    "html_url": "https://dribbble.com/shots/2868083-Bierhaus-Project",
    "attachments_url": "https://api.dribbble.com/v1/shots/2868083/attachments",
    "buckets_url": "https://api.dribbble.com/v1/shots/2868083/buckets",
    "comments_url": "https://api.dribbble.com/v1/shots/2868083/comments",
    "likes_url": "https://api.dribbble.com/v1/shots/2868083/likes",
    "projects_url": "https://api.dribbble.com/v1/shots/2868083/projects",
    "rebounds_url": "https://api.dribbble.com/v1/shots/2868083/rebounds",
    "animated": false,
    "tags": [
      "beer",
      "behance",
      "bottle",
      "brewery",
      "brewing",
      "food",
      "illustration",
      "packaging",
      "print",
      "project"
    ],
    "user": {
      "id": 60266,
      "name": "Gustavo Zambelli",
      "username": "zamax",
      "html_url": "https://dribbble.com/zamax",
      "avatar_url": "https://d13yacurqjgara.cloudfront.net/users/60266/avatars/normal/83d4ac61d50bf5b2fedc9f9cc45a62d9.png?1453312126",
      "bio": "Hi, I&#39;m Lead of illustration at <a href=\"https://dribbble.com/aerolab\">@aerolab</a>, designer at <a href=\"https://dribbble.com/stickermule\">@stickermule</a> &amp; Superman at <a href=\"https://dribbble.com/RicosQuesos\">@RicosQuesos</a>",
      "location": "Neuquén, Argentina.",
      "links": {
        "web": "http://zamax.tumblr.com",
        "twitter": "https://twitter.com/zamax4"
      },
      "buckets_count": 20,
      "comments_received_count": 1913,
      "followers_count": 5108,
      "followings_count": 1318,
      "likes_count": 10577,
      "likes_received_count": 45848,
      "projects_count": 6,
      "rebounds_received_count": 149,
      "shots_count": 344,
      "teams_count": 4,
      "can_upload_shot": true,
      "type": "Player",
      "pro": true,
      "buckets_url": "https://api.dribbble.com/v1/users/60266/buckets",
      "followers_url": "https://api.dribbble.com/v1/users/60266/followers",
      "following_url": "https://api.dribbble.com/v1/users/60266/following",
      "likes_url": "https://api.dribbble.com/v1/users/60266/likes",
      "projects_url": "https://api.dribbble.com/v1/users/60266/projects",
      "shots_url": "https://api.dribbble.com/v1/users/60266/shots",
      "teams_url": "https://api.dribbble.com/v1/users/60266/teams",
      "created_at": "2011-09-07T19:27:31Z",
      "updated_at": "2016-07-30T16:33:34Z"
    },
    "team": {
      "id": 171431,
      "name": "Aerolab",
      "username": "aerolab",
      "html_url": "https://dribbble.com/aerolab",
      "avatar_url": "https://d13yacurqjgara.cloudfront.net/users/171431/avatars/normal/1283d5fbcd21a809d0cdc2f96a560096.png?1458077891",
      "bio": "We design and develop beautiful digital products for startups and leading brands.",
      "location": "Buenos Aires - San Francisco",
      "links": {
        "web": "http://aerolab.co",
        "twitter": "https://twitter.com/aerolab"
      },
      "buckets_count": 5,
      "comments_received_count": 200,
      "followers_count": 4511,
      "followings_count": 133,
      "likes_count": 4228,
      "likes_received_count": 2654,
      "projects_count": 25,
      "rebounds_received_count": 3,
      "shots_count": 635,
      "can_upload_shot": true,
      "type": "Team",
      "pro": false,
      "buckets_url": "https://api.dribbble.com/v1/users/171431/buckets",
      "followers_url": "https://api.dribbble.com/v1/users/171431/followers",
      "following_url": "https://api.dribbble.com/v1/users/171431/following",
      "likes_url": "https://api.dribbble.com/v1/users/171431/likes",
      "projects_url": "https://api.dribbble.com/v1/users/171431/projects",
      "shots_url": "https://api.dribbble.com/v1/users/171431/shots",
      "created_at": "2012-07-04T02:31:07Z",
      "updated_at": "2016-07-30T16:33:34Z",
      "members_count": 19,
      "members_url": "https://api.dribbble.com/v1/teams/171431/members",
      "team_shots_url": "https://api.dribbble.com/v1/teams/171431/shots"
    }
  }
];


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      pictures: pictures
    });
    // return Ember.$.getJSON('https://api.dribbble.com/v1/shots?access_token=442bc1e1c25c2557be4d5f6ffa4099f450c13c0fe3924a6e7631efa8106baeb8&callback=?');

    // $.getJSON('https://api.dribbble.com/v1/shots?access_token=442bc1e1c25c2557be4d5f6ffa4099f450c13c0fe3924a6e7631efa8106baeb8&callback=meta', function(resp) {
    //  if (resp.data.length > 0) {
    //    $.each(resp.data.reverse(), function(i, val) {
    //      $('#dribbble').prepend('<li class="box"><img src="' + val.images.normal + '" /><h2>' + val.title + '</h2><p><a href="' + val.html_url + '">original post &rarr;</a></p></li>');
    //    });
    //  } else {
    //    $('#dribbble').append('<li>No shots.</li>');
    //  }
    // });
  }
});
