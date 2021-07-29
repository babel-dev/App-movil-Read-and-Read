import React from "react";
import { View, Text } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import useAuth from "../../hooks/useAuth";

export default function SkeletonWishList() {    
    const { theme } = useAuth()
    
    return (
        <>
            <View style={{ marginBottom: 10 }}>
                <SkeletonPlaceholder backgroundColor={ theme === 'dark'? '#222': '#e1e8ee' } speed={0}>
                    <SkeletonPlaceholder.Item
                        flexDirection="row"
                        alignItems="center"
                    >
                        <SkeletonPlaceholder.Item
                            width={100}
                            height={60}
                            borderRadius={0}
                        />
                        <SkeletonPlaceholder.Item marginLeft={20} height={40}>
                            <SkeletonPlaceholder.Item
                                width={160}
                                height={20}
                                borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={130}
                                height={20}
                                borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={80}
                                height={20}
                                borderRadius={4}
                            />
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
                <SkeletonPlaceholder backgroundColor={ theme === 'dark'? '#222': '#e1e8ee' } speed={0}>
                    <SkeletonPlaceholder.Item
                        flexDirection="row"
                        alignItems="center"
                    >
                        <SkeletonPlaceholder.Item
                            width={100}
                            height={60}
                            borderRadius={0}
                        />
                        <SkeletonPlaceholder.Item marginLeft={20} height={40}>
                            <SkeletonPlaceholder.Item
                                width={120}
                                height={20}
                                borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={180}
                                height={20}
                                borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={80}
                                height={20}
                                borderRadius={4}
                            />
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            </View>
            <View style={{ marginBottom: 10 }}>
            <SkeletonPlaceholder backgroundColor={ theme === 'dark'? '#222': '#e1e8ee' } speed={0}>
                    <SkeletonPlaceholder.Item
                        flexDirection="row"
                        alignItems="center"
                    >
                        <SkeletonPlaceholder.Item
                            width={100}
                            height={60}
                            borderRadius={0}
                        />
                        <SkeletonPlaceholder.Item marginLeft={20} height={40}>
                            <SkeletonPlaceholder.Item
                                width={160}
                                height={20}
                                borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={130}
                                height={20}
                                borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={80}
                                height={20}
                                borderRadius={4}
                            />
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
                <SkeletonPlaceholder backgroundColor={ theme === 'dark'? '#222': '#e1e8ee' } speed={0}>
                    <SkeletonPlaceholder.Item
                        flexDirection="row"
                        alignItems="center"
                    >
                        <SkeletonPlaceholder.Item
                            width={100}
                            height={60}
                            borderRadius={0}
                        />
                        <SkeletonPlaceholder.Item marginLeft={20} height={40}>
                            <SkeletonPlaceholder.Item
                                width={120}
                                height={20}
                                borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={180}
                                height={20}
                                borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={80}
                                height={20}
                                borderRadius={4}
                            />
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            </View>
            <View style={{ marginBottom: 10 }}>
            <SkeletonPlaceholder backgroundColor={ theme === 'dark'? '#222': '#e1e8ee' } speed={0}>
                    <SkeletonPlaceholder.Item
                        flexDirection="row"
                        alignItems="center"
                    >
                        <SkeletonPlaceholder.Item
                            width={100}
                            height={60}
                            borderRadius={0}
                        />
                        <SkeletonPlaceholder.Item marginLeft={20} height={40}>
                            <SkeletonPlaceholder.Item
                                width={160}
                                height={20}
                                borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={130}
                                height={20}
                                borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={80}
                                height={20}
                                borderRadius={4}
                            />
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
                <SkeletonPlaceholder backgroundColor={ theme === 'dark'? '#222': '#e1e8ee' } speed={0}>
                    <SkeletonPlaceholder.Item
                        flexDirection="row"
                        alignItems="center"
                    >
                        <SkeletonPlaceholder.Item
                            width={100}
                            height={60}
                            borderRadius={0}
                        />
                        <SkeletonPlaceholder.Item marginLeft={20} height={40}>
                            <SkeletonPlaceholder.Item
                                width={120}
                                height={20}
                                borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={180}
                                height={20}
                                borderRadius={4}
                            />
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={80}
                                height={20}
                                borderRadius={4}
                            />
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            </View>            
        </>
    );
}
