export function seedDatabase(firebase) {
  const users = [
    {
      userId: "As8HwpvU62g21rUaoceICjaD9lL2",
      username: "Bijay",
      fullName: "Bijay Tamang",
      emailAddress: "tmg.bijay11@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "Shristi",
      fullName: "Shristi Gurung",
      emailAddress: "shristyzrg@gmail.com",
      following: [],
      followers: ["As8HwpvU62g21rUaoceICjaD9lL2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "Tenzin ",
      fullName: "Tenzin Lama",
      emailAddress: "tenzinlama@gmail.com",
      following: [],
      followers: ["As8HwpvU62g21rUaoceICjaD9lL2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "Prabin",
      fullName: "Prabin Rana Magar",
      emailAddress: "pmagar@gmail.com",
      following: [],
      followers: ["As8HwpvU62g21rUaoceICjaD9lL2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "Lakpa",
      fullName: "Lakpa Sherpa",
      emailAddress: "lsherpa@gmail.com",
      following: [],
      followers: ["As8HwpvU62g21rUaoceICjaD9lL2"],
      dateCreated: Date.now(),
    },
  ];

  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/shristi/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "Bijay Tamang",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "Jean Doe",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
