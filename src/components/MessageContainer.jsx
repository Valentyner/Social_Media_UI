import { Avatar, Divider, Flex, Image, Skeleton, SkeletonCircle, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import useShowToast from '../hooks/useShowToast'
import { useRecoilState, useRecoilValue } from 'recoil'
import { selectedConversationAtom } from '../atoms/conversationAtom'
import userAtom from '../atoms/userAtom'

const MessageContainer = () => {
    const [loading, setLoading] = useState(true)
    const [messages, setMessages] = useState([])
    const [selectedConversation, setSelectedConversation] = useRecoilState(selectedConversationAtom)
    const currentUser = useRecoilValue(userAtom)
    const showToast = useShowToast();
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            setMessages([])
            try {
                if (selectedConversation.mock) return
                const res = await fetch(`/api/messages/${selectedConversation?.userId}`)
                const data = await res.json()
                if (data.error) {
                    showToast("Error", data.error, "error")
                    return
                }
                setMessages(data)
            } catch (error) {
                showToast("Error", error.message, "error");
            } finally {
                setLoading(false)
            }
        }
        getMessages()
    }, [showToast, selectedConversation.userId])
    return (
        <Flex flex={"70"} bg={useColorModeValue("gray.200", "gray.dark")} p={2} borderRadius={"md"} flexDirection={"column"}>
            <Flex w={"full"} h={12} alignItems={"center"} gap={2}>
                <Avatar src={selectedConversation.userProfilePic} size={"sm"} />
                <Text display={"flex"} alignItems={"center"}>{selectedConversation.username}<Image src='/verified.png' w={4} h={4} ml={1} /></Text>
            </Flex>
            <Divider />
            <Flex flexDir={"column"} gap={4} my={4} px={2} maxH={"600px"} height={"700px"} overflowY={"auto"}>
                {loading && (
                    [...Array(5)].map((_, i) => (
                        <Flex key={i} gap={2} alignItems={"center"} p={1} borderRadius={"md"} alignSelf={i % 2 === 0 ? "flex-start" : "flex-end"}>
                            {i % 2 === 0 && <SkeletonCircle size={7} />}
                            <Flex flexDir={"column"} gap={2}>
                                <Skeleton h={"8px"} w={"250px"} />
                                <Skeleton h={"8px"} w={"250px"} />
                                <Skeleton h={"8px"} w={"250px"} />
                            </Flex>
                            {i % 2 !== 0 && <SkeletonCircle size={7} />}
                        </Flex>
                    ))
                )}
                {!loading && (
                    messages.map((message) => (
                        <Message key={message._id} message={message} ownMessage={currentUser._id === message.sender} />
                    ))
                )}
            </Flex>

            <MessageInput setMessages={setMessages} />
        </Flex>
    )
}

export default MessageContainer
