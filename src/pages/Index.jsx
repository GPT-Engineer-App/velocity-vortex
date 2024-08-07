import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Cat, Heart, Info, ArrowRight, Paw, Star, Gift, Camera } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [factOfTheDay, setFactOfTheDay] = useState("");
  const [adoptionIndex, setAdoptionIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [catName, setCatName] = useState("");
  const [catPhoto, setCatPhoto] = useState(null);
  const headerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);
  const { toast } = useToast();

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

  const catsForAdoption = [
    { name: "Whiskers", age: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1200px-RedCat_8727.jpg" },
    { name: "Luna", age: 1, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Britishblue.jpg/1200px-Britishblue.jpg" },
    { name: "Oliver", age: 3, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collage_of_Six_Cats-02.jpg/1200px-Collage_of_Six_Cats-02.jpg" },
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

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCatPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCatNameSubmit = () => {
    if (catName && catPhoto) {
      toast({
        title: "Cat Added!",
        description: `${catName} has been added to our cat community!`,
      });
      setCatName("");
      setCatPhoto(null);
    } else {
      toast({
        title: "Oops!",
        description: "Please provide both a name and a photo for your cat.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <motion.div 
        ref={headerRef}
        style={{ y }}
        className="h-[50vh] flex items-center justify-center bg-cover bg-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-7xl font-bold text-center text-white drop-shadow-lg relative z-10"
        >
          Purrfect Cat Paradise
        </motion.h1>
        <AnimatePresence>
          {showConfetti && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(50)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute text-2xl"
                  initial={{
                    top: "0%",
                    left: `${Math.random() * 100}%`,
                    opacity: 1,
                  }}
                  animate={{
                    top: "100%",
                    opacity: 0,
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  🎉
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <div className="max-w-6xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
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
          className="bg-white p-6 rounded-lg shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-purple-800">Cat Fact of the Day</h2>
          <p className="text-xl text-gray-700 italic">&ldquo;{factOfTheDay}&rdquo;</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Adopt a Furry Friend</h2>
          <div className="flex justify-center items-center space-x-8">
            <Button onClick={() => setAdoptionIndex((prev) => (prev - 1 + catsForAdoption.length) % catsForAdoption.length)}>
              Previous
            </Button>
            <AnimatePresence mode="wait">
              <motion.div
                key={adoptionIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="w-64 transform hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-4">
                    <img 
                      src={catsForAdoption[adoptionIndex].image} 
                      alt={catsForAdoption[adoptionIndex].name} 
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{catsForAdoption[adoptionIndex].name}</h3>
                    <p>Age: {catsForAdoption[adoptionIndex].age} years</p>
                    <Button 
                      className="mt-4 w-full"
                      onClick={() => {
                        toast({
                          title: "Adoption Request Sent!",
                          description: `Thank you for your interest in adopting ${catsForAdoption[adoptionIndex].name}!`,
                        });
                        setShowConfetti(true);
                        setTimeout(() => setShowConfetti(false), 3000);
                      }}
                    >
                      Adopt Me!
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
            <Button onClick={() => setAdoptionIndex((prev) => (prev + 1) % catsForAdoption.length)}>
              Next
            </Button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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

          <Card className="bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-800">Cat Lover's Corner</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center relative"
              >
                <Button 
                  onClick={() => {
                    setLikes(likes + 1);
                    toast({
                      title: "Thanks for the love!",
                      description: "You're paw-some!",
                    });
                  }}
                  className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 z-10 relative"
                >
                  <Heart className="mr-2 h-4 w-4" /> Show Some Love
                </Button>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, times: [0, 0.5, 1] }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <Paw className="text-pink-300 h-40 w-40 opacity-10" />
                </motion.div>
                <motion.p 
                  key={likes}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  className="mt-4 text-3xl font-bold text-purple-800 relative z-10"
                >
                  {likes} cat lovers so far!
                </motion.p>
                <p className="mt-2 text-gray-600 relative z-10">Join our community of cat enthusiasts!</p>
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`inline-block h-6 w-6 ${
                        index < Math.min(5, Math.floor(likes / 20))
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center space-y-4"
        >
          <Button 
            className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 text-lg px-6 py-3"
          >
            Explore More <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 text-lg px-6 py-3">
                Add Your Cat <Gift className="ml-2 h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Your Cat</DialogTitle>
                <DialogDescription>
                  Share your furry friend with our cat-loving community!
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={catName}
                    onChange={(e) => setCatName(e.target.value)}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="photo" className="text-right">
                    Photo
                  </Label>
                  <div className="col-span-3">
                    <Input
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                    />
                    {catPhoto && (
                      <img
                        src={catPhoto}
                        alt="Uploaded cat"
                        className="mt-2 w-full h-40 object-cover rounded-md"
                      />
                    )}
                  </div>
                </div>
              </div>
              <Button onClick={handleCatNameSubmit} className="w-full">
                Add Cat <Camera className="ml-2 h-4 w-4" />
              </Button>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
