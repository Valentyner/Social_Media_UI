import { Avatar, AvatarBadge, Flex, Image, Stack, Text, WrapItem, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom';
import { BsCheck2All } from "react-icons/bs"
import { selectedConversationAtom } from '../atoms/conversationAtom';

const Conversation = ({ conversation }) => {
    const user = conversation.participants[0];
    const lastMessage = conversation.lastMessage
    const currentUser = useRecoilValue(userAtom)
    const [selectedConversation, setSelectedConversation] = useRecoilState(selectedConversationAtom)
    const colorMode = useColorMode()
    return (
        <Flex gap={4} alignItems={"center"} p={1} _hover={{
            cursor: 'pointer', bg: useColorModeValue("gray.600", "gray.dark"), color: "white"
        }} borderRadius={"md"} onClick={() => setSelectedConversation({ 
            _id: conversation._id, 
            userId: user._id, 
            userProfilePic: user.profilePic, 
            username: user.username,
            mock: conversation.mock, })} bg={selectedConversation?._id === conversation._id ? (colorMode === "light" ? "gray.600" : "gray.dark") : ''}>
            <WrapItem>
                <Avatar size={{ base: "xs", sm: "sm", md: "md" }} src={conversation.participants[0].profilePic}>
                    <AvatarBadge boxSize="1em" bg="green.400" />
                </Avatar>
            </WrapItem>
            <Stack direction={"column"} fontSize={"sm"}>
                <Text fontWeight={"700"} display={"flex"} alignItems={"center"}>
                    {user.username}
                    <Image src='/verified.png' w={4} h={4} ml={1} />
                </Text>
                <Text fontSize={'sm'} display={"flex"} alignItems={"center"} gap={1}>
                    {currentUser._id === lastMessage.sender ? <BsCheck2All /> : ""}
                    {lastMessage.text.length > 14 ? lastMessage.text.substring(0, 14) + "..." : lastMessage.text}
                </Text>
            </Stack>
        </Flex>
    )
}

export default Conversation
