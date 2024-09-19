puts 'seeding now!'
Restaurant.create([
  {
    name: "Jessops Tavern",
    location: "114 Delaware St, New Castle, DE 19720",
    description: "Casual pub in a circa-1724 building...",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipMqZ0AumEBBPjxdtFBVeXJOZ0XPIkbUTVp87kz0=s1360-w1360-h1020",
      "https://giftcards.quickgifts.com/images/product/jessopstavpp_22103.jpg",
      "https://cdn.savingplaces.org/2016/01/07/10/12/25/80/JessopsTavern_Exterior2_Credit_RonCogswell_Flickr_CCBY20.jpg"
    ]
  },
  {
    name: "The Mercury Cafe & Teahouse",
    location: "206 Delaware Street Historic, New Castle, DE 19720",
    description: "A cozy, community-focused eatery...",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipN6Ivixb-zpNYWFPfazgCNZOGuEYaqzv4ELDcMy=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipPntrRVsxUqel8HJ-NgiyBCCi9eJBYVB1N1ZJw0=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipMuDWgiLC7wBIKZqTIpVMi1TVrUPFVzCv4iMAwr=s1360-w1360-h1020"
    ]
  }
])
puts 'all done'
