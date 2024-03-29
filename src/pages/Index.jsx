import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Grid, Image, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, HStack } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import { FaPlay, FaPause, FaSearch, FaMusic, FaGuitar, FaMicrophone, FaDrum, FaHeadphones, FaTape } from "react-icons/fa";

const musicIcons = [
  { icon: FaMusic, text: "All Music" },
  { icon: FaGuitar, text: "Guitar" },
  { icon: FaMicrophone, text: "Vocals" },
  { icon: FaDrum, text: "Drums" },
  { icon: FaHeadphones, text: "Headphones" },
  { icon: FaTape, text: "Cassette" },
];

const albums = [
  {
    id: 1,
    title: "Album 1",
    artist: "Artist 1",
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzEwNDI5MjYyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tracks: ["Track 1", "Track 2", "Track 3"],
  },
  {
    id: 2,
    title: "Album 2",
    artist: "Artist 2",
    cover: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtJTIwYXJ0d29ya3xlbnwwfHx8fDE3MTA1NjM5MjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    tracks: ["Track 1", "Track 2", "Track 3"],
  },
  {
    id: 3,
    title: "Album 3",
    artist: "Artist 3",
    cover: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzEwNDI5MjYyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tracks: ["Track 1", "Track 2", "Track 3", "Track 4"],
  },
  {
    id: 4,
    title: "Album 4",
    artist: "Artist 4",
    cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzEwNDI5MjYyfDA&ixlib=rb-4.0.3&q=80&w=1080",
    tracks: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredAlbums = albums.filter((album) => album.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const openAlbumModal = (album) => {
    setSelectedAlbum(album);
    onOpen();
  };

  return (
    <Box p={8}>
      <HStack mb={8}>
        <Image src={Logo} alt="Music Library Logo" boxSize="50px" mr={4} />
        <Heading as="h1" size="2xl">
          Music Library
        </Heading>
      </HStack>
      <Input placeholder="Search albums..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mb={8} />
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={8}>
        {filteredAlbums.map((album) => (
          <Box key={album.id} borderWidth={1} borderRadius="lg" overflow="hidden" cursor="pointer" onClick={() => openAlbumModal(album)}>
            <Image src={album.cover} alt={album.title} w="100%" h="200px" objectFit="cover" />
            <Box p={4}>
              <Heading as="h2" size="md" mb={2}>
                {album.title}
              </Heading>
              <Text>{album.artist}</Text>
            </Box>
          </Box>
        ))}
      </Grid>

      <Box mt={12}>
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text>Welcome to our music library! We are passionate about curating and sharing a diverse collection of albums from various artists. Explore our library, discover new music, and immerse yourself in the world of melodies and rhythms.</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedAlbum?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={selectedAlbum?.cover} alt={selectedAlbum?.title} w="300px" h="300px" objectFit="cover" mb={4} />
            <Text mb={4}>{selectedAlbum?.artist}</Text>
            <Heading as="h3" size="md" mb={2}>
              Tracks:
            </Heading>
            {selectedAlbum?.tracks.map((track, index) => (
              <Text key={index}>{track}</Text>
            ))}
          </ModalBody>
          <ModalFooter>
            <IconButton icon={<FaPlay />} mr={2} />
            <IconButton icon={<FaPause />} />
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box mt={12}>
        <Heading as="h2" size="xl" mb={4}>
          Explore Music
        </Heading>
        <Grid templateColumns="repeat(6, 1fr)" gap={8}>
          {musicIcons.map(({ icon: Icon, text }, index) => (
            <Box key={index} display="flex" flexDirection="column" alignItems="center" p={4} borderRadius="md" bgGradient="linear(to-br, gray.100, gray.300)" boxShadow="md">
              <Icon size="48px" color="blue.500" />
              <Text mt={2}>{text}</Text>
            </Box>
          ))}
        </Grid>
      </Box>
      <Box position="relative" mt={12}>
        <Image src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzEwNDI5MjYyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Music Library Ad" w="100%" h="400px" objectFit="cover" />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" bg="rgba(0, 0, 0, 0.6)" p={8} color="white" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>
            Discover Your Next Favorite Album
          </Heading>
          <Text fontSize="xl">Explore our vast collection of music and find your perfect soundtrack.</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
