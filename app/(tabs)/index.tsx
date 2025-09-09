import {SafeAreaView} from "react-native-safe-area-context";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View} from "react-native";
import {Fragment} from "react";
import cn from 'clsx';

// import CartButton from "@/components/CartButton";
import { images, offers} from "../../constants/index";
import CartButton from "components/CartButton";
import { Redirect } from "expo-router";

const Index = () => {
  
  
  
  console.log( offers)
  return (    
    <SafeAreaView className="flex-1 bg-white">
      <Redirect href={"/home"} />
          <FlatList
              data={offers}
              renderItem={({ item, index }) => {
                  const isEven = index % 2 === 0;

                  return (
                      <View>
                        <Pressable
                          className={cn("offer-card", isEven ? "flex-row-reverse" : "flex-row")}
                          style={{ backgroundColor: item.color, height: 160, borderRadius: 16, marginVertical: 8 }}
                          android_ripple={{ color: "#fffff22" }}
                        >
                          {() => (
                            <Fragment>
                              {/* Image side */}
                              <View className="h-full w-1/2 items-center justify-center">
                                <Image
                                  source={item.image}
                                  style={{
                                    width: "90%",    // 👈 40% of half side = ~1/2.5 scale
                                    height: "90%",   // keeps it proportional
                                    aspectRatio: 1,  // makes sure it doesn’t stretch
                                    resizeMode: "contain",
                                  }}
                                />
                              </View>

                              {/* Info side */}
                              <View
                                className={cn(
                                  "flex-1 justify-center",
                                  isEven ? "pl-6" : "pr-6"
                                )}
                              >
                                <Text className="text-xl font-bold text-white leading-tight">
                                  {item.title}
                                </Text>
                                <Image
                                  source={images.arrowRight}
                                  className="w-6 h-6 mt-2"
                                  resizeMode="contain"
                                  tintColor="#ffffff"
                                />
                              </View>
                            </Fragment>
                          )}
                        </Pressable>



                      </View>
                  )
              }}
              contentContainerClassName="pb-28 px-5"
              ListHeaderComponent={()=>(
                <View className="flex-between flex-row w-full my-5">
                  <View>
                    <Text className=" small-bold text-primary">DELIVER TO</Text>
                    <TouchableOpacity className=" flex-center flex-row gap-x-1 mt-0.5">
                      <Text className=" paragraph-bold text-dark-100">Jaipur</Text>
                      <Image source={images.arrowDown}   style={{ width: 12, height: 12 }} resizeMode="contain"/>
                    </TouchableOpacity>

                  </View>
                  <View>
                    <CartButton/>
                  </View>
                </View>
              )}
          />
      </SafeAreaView>
  )
}

export default Index