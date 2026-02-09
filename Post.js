// [
//     {
//         "owner": {
//             "id": "1a84215d-485e-424e-9d0f-2367d45cef21",
//             "screenName": "Jordan K. Is cool!!! 😎 😎",
//         },
//         “title”: “Welcome”,
//         "content": "Welcome to Infiniscape! Let's chat about everything!",
//         "postedDateUtc": "2025-03-17T14:57:04.2830297Z",
//         "reactions": {
//             "Like": 1
//         },
//         "userReactions": [
//             "Like"
//         ],
//         "imageUrls": null,
//         "id": "e17ed15e-70e6-4c8a-875f-bbfe698d6753",
//         “link” : null,
//     },
//     {
//         "owner":  {
//             "id": "6b961a79-9bae-40ac-83bb-fa236c8ad1a5",
//             "screenName": "Isha going to India today",
//          },
//         “title”: “Welcome”,
//         "content": "Welcome to Infiniscape! Let's chat about everything!",
//         "postedDateUtc": "2025-03-17T14:46:09.2500836Z",
//         "reactions": {
//             "Like": 0
//         },
//         "userReactions": [],
//         "imageUrls": [
//                   "https://infiniscape.blob.core.windows.net/experience/1d203db6-cccd-4fe8-b826-5c0394eb6353.jpg?v=537504",
//             "https://infiniscape.blob.core.windows.net/experience/8ab1af97-271c-4f2a-ad6c-b48188de2762.jpg?v=0e18f2"
//          ],
//         “id”: "cbfefbf2-7b1e-4630-acdb-5cca92163744",
//         “link”: null
//     },
//         {
//         "owner": {
//             "id": ,"21fd95d8-7a24-412d-984b-9a2b63ce2c40",
//             "screenName": "Cool guy",
//         },
//         “title”: “Hello!”,
//         "content": "Just posting this message board here! ",
//         "postedDateUtc": "2025-03-13T16:30:08.7683214Z",
//         "reactions": {
//             "Like": 1
//         },
//         "userReactions": [
//             "Like"
//         ],
//         "imageUrls": null,
//         "id": "e17ed15e-70e6-4c8a-875f-bbfe698d6753",
//         “link”: "https://infiniscape.blob.core.windows.net/experience/4d4e314c-2457-4cc6-b0b8-2b8be3336473.jpg?v=0fd5d6”,
//     },
//     {
//         "owner":  {
//             "id": "5b961a79-8bae-40ac-76ab-fa236c5ad4b9",
//             "screenName": "Maria here",
//          },
//         “title”: null,
//         "content": "Coffee in the morning is a great start of the day.",
//         "postedDateUtc": "2025-03-12T14:46:09.2500836Z",
//         "reactions": {
//             "Like": 0
//         },
//         "userReactions": [],
//         "imageUrls": null,
//         “id”: "cbfefbf2-7b1e-4630-acdb-5cca92234789",
//         “link”: null
//     }
//     ]

export const Post = ({ owner, title, content }: post) => {
  return (
    <View>
      <Text>{post.owner.screenName} </Text>
      {post.title && <Text> post.title </Text>}
      <Text>{post.content}</Text>
      {post.imageUrls &&
        post.imageUrls.map((url) => {
          return <Image source={{ uri: url }} />;
        })}
      {post.link && <Link href={post.link}>Visit my page</Link>}
    </View>
  );
};
