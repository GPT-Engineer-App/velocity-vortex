import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Cat, Heart, Info, ArrowRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [factOfTheDay, setFactOfTheDay] = useState("");

  const catFacts = [
    "Cats have been domesticated for over 4,000 years.",
    "An adult cat has 30 teeth.",
    "Cats can jump up to six times their length.",
    "A group of cats is called a 'clowder'.",
    "Cats spend 70% of their lives sleeping.",
    "Cats can rotate their ears 180 degrees.",
    "A cat's nose print is unique, like a human's fingerprint.",
    "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  ];

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature." },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds with a friendly personality." },
    { name: "Persian", description: "Recognized for their long fur and flat faces." },
    { name: "Bengal", description: "Wild-looking cats with leopard-like spots." },
    { name: "Sphynx", description: "Hairless cats known for their wrinkled skin." },
  ];

  const catImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sleeping_cat_on_her_back.jpg/1200px-Sleeping_cat_on_her_back.jpg",
  ];

  useEffect(() => {
    setFactOfTheDay(catFacts[Math.floor(Math.random() * catFacts.length)]);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold mb-6 text-center text-purple-800"
      >
        Purrfect Cat Paradise
      </motion.h1>
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Slider {...sliderSettings}>
            {catImages.map((img, index) => (
              <div key={index} className="px-2">
                <img 
                  src={img} 
                  alt={`Cute cat ${index + 1}`} 
                  className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
        >
          <h2 className="text-2xl font-bold mb-2 text-purple-800">Cat Fact of the Day</h2>
          <p className="text-lg text-gray-700">{factOfTheDay}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Tabs defaultValue="facts" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="facts">Feline Facts</TabsTrigger>
              <TabsTrigger value="breeds">Cat Breeds</TabsTrigger>
            </TabsList>
            <TabsContent value="facts">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center"><Info className="mr-2" /> Feline Facts</CardTitle>
                  <CardDescription>Interesting tidbits about our furry friends</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {catFacts.map((fact, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <Cat className="mr-2 h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                        <span>{fact}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="breeds">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center"><Cat className="mr-2" /> Popular Cat Breeds</CardTitle>
                  <CardDescription>Some well-known feline friends</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {catBreeds.map((breed, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <h3 className="font-semibold text-lg text-purple-700">{breed.name}</h3>
                        <p className="text-gray-600">{breed.description}</p>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="bg-gradient-to-br from-pink-100 to-purple-100">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-800">Cat Lover's Corner</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <Button 
                  onClick={() => setLikes(likes + 1)}
                  className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Heart className="mr-2 h-4 w-4" /> Show Some Love
                </Button>
                <p className="mt-4 text-2xl font-bold text-purple-800">
                  {likes} cat lovers so far!
                </p>
                <p className="mt-2 text-gray-600">Join our community of cat enthusiasts!</p>
              </motion.div>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
