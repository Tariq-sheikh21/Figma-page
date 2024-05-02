import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  Slider,
  Text,
} from "components";

const MockTwoPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="font-poppins md:h-[886px] h-[889px] sm:h-[972px] md:px-5 relative w-full">
            <div className="md:h-[886px] h-[889px] sm:h-[972px] m-auto w-full">
              <div className="md:h-[886px] h-[889px] sm:h-[972px] m-auto w-full">
                <div className="md:h-[886px] h-[889px] m-auto w-full">
                  <div className="bg-gradient  flex flex-col h-full items-start justify-start m-auto p-[103px] md:px-10 sm:px-5 w-full">
                    <div className="flex flex-col justify-start mb-[269px] md:ml-[0] ml-[18px] w-[84%] md:w-full">
                      <Line className="bg-black-900_19 h-px md:ml-[0] ml-[248px] w-[83%]" />
                      <Img
                        className="h-[82px] md:ml-[0] ml-[643px] mt-[33px] w-[82px]"
                        src="images/img_polygon2.svg"
                        alt="polygonTwo"
                      />
                      <div className="flex flex-row sm:gap-10 gap-[729px] items-end justify-start mt-[214px] w-[65%] md:w-full">
                        <div className="bg-red-100 h-[37px] mt-[43px] rounded-[18px] w-[37px]"></div>
                        <Img
                          className="h-[79px] md:h-auto object-cover rounded"
                          src="images/img_vector13.png"
                          alt="vectorThirteen"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[6%] h-[532px] left-[0] object-cover w-[30%] rounded-full blur-[40.00px] " 
                    src="images/img_ellipse1457.png"
                    alt="ellipse1457"
                  />
                  <div className="absolute h-[633px] right-[0] top-[0] w-[38%] md:w-full">
                    <Img
                      className="h-[663px] m-auto object-cover w-full rounded-[50%]  blur-[40.00px] "
                      src="images/img_ellipse1447.png"
                      alt="ellipse1447"
                    />
                    <Img
                      className="absolute h-11 left-[34%] top-[5%]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Img
                      className="absolute h-[43px] right-[21%] top-[26%]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  </div>
                </div>
                <div className="absolute h-[274px] left-[0] top-[0] w-[30%] sm:w-full">
                  <Img
                    className="h-[274px] m-auto object-cover w-full rounded-full blur-[40.00px]"
                    src="images/img_ellipse1458.png"
                    alt="ellipse1458"
                  />
                  <Img
                    className="absolute bottom-[27%] h-[99px] left-[17%]"
                    src="images/img_ticket.svg"
                    alt="ticket"
                  />
                  <Img
                    className="absolute h-[74px] object-cover right-[16%] top-[7%] w-[16%]"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[95px] justify-start right-[13%] top-[4%] w-[36%]">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-6 md:ml-[0] w-[58%] md:w-full">
                    <Text
                      className="text-[17.78px] text-red-A200"
                      size="txtPoppinsMedium1778"
                    >
                      Home
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[38px] text-[17.78px] text-gray-900_a2"
                      size="txtPoppinsMedium1778Gray900a2"
                    >
                      About
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[60px] text-[17.78px] text-gray-900_a2"
                      size="txtPoppinsMedium1778Gray900a2"
                    >
                      Services
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[38px] text-[17.78px] text-gray-900_a2"
                      size="txtPoppinsMedium1778Gray900a2"
                    >
                      Contact
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="md:h-[550px] h-[597px] sm:h-[629px] relative w-[82%] sm:w-full">
                      <div className="absolute bottom-[0] md:h-[478px] h-[552px] sm:h-[629px] inset-x-[0] mx-auto w-full">
                        <Img
                          className="h-[460px] m-auto"
                          src="images/img_ellipse90.svg"
                          alt="ellipseNinety"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[106px] h-full inset-[0] justify-center m-auto p-0.5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group17.svg')",
                          }}
                        >
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[207px] items-end justify-start md:ml-[0] ml-[476px] mt-[110px] sm:pl-5 pl-[22px] py-[22px] w-[14%] md:w-full"
                            style={{
                              backgroundImage: "url('images/img_group19.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-[18px] items-center justify-start mb-9 mt-[47px] w-[99%] md:w-full">
                              <div className="bg-white-A700 flex flex-col h-[51px] items-center justify-start p-[13px] rounded-[25px] w-[51px]">
                                <div className="bg-teal-400 h-[23px] rounded-[11px] w-[23px]"></div>
                              </div>
                              <Img
                                className="h-[9px] w-2"
                                src="images/img_signal.svg"
                                alt="signal"
                              />
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[215px] items-start justify-start mb-[3px] ml-2.5 md:ml-[0] mr-[75px] w-[84%] md:w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[118px] items-start justify-end p-[11px] w-[44%] sm:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group20.svg')",
                              }}
                            >
                              <div className="bg-white-A700 flex flex-col h-[47px] items-center justify-start ml-11 md:ml-[0] mt-[47px] p-[11px] rounded-[23px] shadow-bs w-[47px]">
                                <div className="flex flex-col h-[23px] items-center justify-start w-[23px]">
                                  <Img
                                    className="h-[23px] md:h-auto rounded-[50%] w-[23px]"
                                    src="images/img_closeupsmiling.png"
                                    alt="closeupsmiling"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="bg-gradient1  h-[49px] sm:mt-0 mt-[57px] rounded-[24px] w-[49px]"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-[551px] inset-x-[0] items-start justify-start mx-auto p-[34px] sm:px-5 top-[0] w-[84%]"
                        style={{
                          backgroundImage: "url('images/defaultNoData.png')",
                        }}
                      >
                        <div className="bg-gradient2  h-[61px] mb-[421px] md:ml-[0] ml-[124px] rounded-[30px] w-[61px]"></div>
                      </div>
                    </div>
                    <Img
                      className="h-10"
                      src="images/img_settings_red_a200.svg"
                      alt="settings_One"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-y-[0] items-start justify-between my-auto right-[9%] w-[72%]">
                <div className="flex flex-col items-start justify-start md:mt-0 mt-11">
                  <Text
                    className="sm:text-[45.28px] md:text-[51.28px] text-[59.28px] text-gray-900"
                    size="txtPoppinsSemiBold5928"
                  >
                    <span className="text-black-900 font-poppins text-left font-semibold">
                      <>
                        Elevate Your Brand <br />
                        with Our{" "}
                      </>
                    </span>
                    <span className="text-gray-900 font-poppins text-left font-semibold">
                      <>
                        Digital <br />
                      </>
                    </span>
                    <span className="text-red-A200 font-poppins text-left font-semibold">
                      Print
                    </span>
                    <span className="text-white-A700 font-poppins text-left font-semibold">
                      {" "}
                    </span>
                    <span className="text-red-A200 font-poppins text-left font-semibold">
                      Services
                    </span>
                  </Text>
                  <Text
                    className="leading-[35.00px] mt-[30px] text-[19.76px] text-black-900_90 tracking-[0.40px] w-full"
                    size="txtPoppinsRegular1976"
                  >
                    <>
                      Lorem Ipsum is simplydummy text of the printing and
                      typesetting <br /> industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy <br /> text ever since the 1500.
                    </>
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[178px] mt-10 rounded-md text-[19.76px] text-center"
                    color="red_A200"
                    size="md"
                  >
                    Let’s Talk Us
                  </Button>
                </div>
                <Img
                  className="h-[99px]"
                  src="images/img_settings.svg"
                  alt="settings_Two"
                />
              </div>
            </div>
            <Img
              className="absolute bottom-[12%] h-[588px] object-cover right-[10%] w-[46%]"
              src="images/img_image34.png"
              alt="imageThirtyFour"
            />
          </div>
          <div className="flex md:flex-col flex-row font-poppins gap-[50px] items-start justify-center max-w-[1160px] mt-[167px] mx-auto md:px-5 w-full">
            <div className="flex md:h-[343px] h-[538px] justify-end relative w-[47%] md:w-full">
              <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[64%]">
                <Img
                  className="h-[292px] md:h-auto object-cover rounded-bl-[9px] rounded-br-[9px] w-full"
                  src="images/img_image31.png"
                  alt="imageThirtyOne"
                />
              </div>
              <div className="bg-blue_gray-100 h-[26px] mb-[245px] ml-auto mr-[117px] mt-auto rotate-[90deg] w-[9%]"></div>
              <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start p-[9px] right-[0] rounded-[9px] shadow-bs1 w-[77%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[325px] md:h-auto object-cover rounded-bl-[9px] rounded-br-[9px] w-full"
                    src="images/img_image33.png"
                    alt="imageThirtyThree"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[97px] right-[13%] top-[13%] w-[97px]"
                src="images/img_contrast.svg"
                alt="contrast"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start md:mt-0 mt-2.5 w-1/2 md:w-full">
              <div className="flex flex-col items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-[19.76px] text-red-A200"
                  size="txtPoppinsRegular1976RedA200"
                >
                  About The Agency
                </Text>
                <Line className="bg-red-A200 h-px rounded-[1px] w-[37%]" />
              </div>
              <Text
                className="leading-[63.00px] sm:text-[33.47px] md:text-[39.47px] text-[43.47px] text-black-900 tracking-[-0.43px]"
                size="txtPoppinsSemiBold4347"
              >
                <>
                  Digital Print Agency that <br />
                  Help you go Ahead.
                </>
              </Text>
              <Text
                className="leading-[31.00px] text-[19.76px] text-black-900 tracking-[0.40px]"
                size="txtPoppinsRegular1976Black900"
              >
                <>
                  We are Advertising & Design Production Company Deals
                  <br /> in Large Format Printing, Graphic Designing and all{" "}
                  <br />
                  Types of Branding including Wall/Glass Branding, <br />
                  Exhbition Stand Graphics Branding, Vehilce Branding <br />
                  with our best servies & rates.
                </>
              </Text>
              <div className="flex flex-col items-start justify-start w-[43%] md:w-full mt-[20px]">
    <div className="flex items-center mb-[10px]">
        <Img
            className="h-[35px] w-[35px] mr-[15px] "
            src="images/img_greencheckmark.svg"
            alt="green checkmark"
        />
        <span className="font-medium leading-normal text-[17.78px] text-black-900_99">
            Happy Clients
        </span>
    </div>

    <div className="flex items-center mb-[10px]">
        <Img
            className="h-[35px] w-[35px] mr-[15px]"
            src="images/img_greencheckmark.svg"
            alt="checkmark"
        />
        <span className="font-medium leading-normal text-[17.78px] text-black-900_99">
            Problem Solutions
        </span>
    </div>

    <div className="flex items-center mb-[10px]">
        <Img
            className="h-[35px] w-[35px] mr-[15px]"
            src="images/img_greencheckmark.svg"
            alt="checkmark"
        />
     <span className="font-medium leading-normal text-[17.78px] text-black-900_99" style={{ whiteSpace: 'nowrap' }}>
            Design & Development
     </span>

    </div>
</div>



            </div>
          </div>
          <div className="flex flex-col gap-2.5 h-[178px] md:h-auto items-center justify-start max-w-[991px] md:ml-[0] ml-[462px] mt-[133px] md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-red-A200 sm:text-xl w-auto"
              size="txtHindRegular24"
            >
              Why?
            </Text>
            <Text
              className="capitalize max-w-[991px] md:max-w-full sm:text-[33px] md:text-[39px] text-[43px] text-black-900 text-center"
              size="txtPoppinsSemiBold43"
            >
              Fast, Cheap and High-Quality Digital Prints Why Not?
            </Text>
          </div>
          <div className="font-poppins md:h-[1281px] h-[451px] sm:h-[Infinitypx] max-w-[1199px] mt-10 mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[63%]">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <div className="backdrop-opacity-[0.5] bg-orange-A200_67 blur-[50.00px] h-[200px] sm:mt-0 mt-[31px] rounded-[50%] w-[200px]"></div>
                <div className="backdrop-opacity-[0.5] bg-teal-A700_67 blur-[50.00px] h-[200px] mb-[31px] rounded-[50%] w-[200px]"></div>
              </div>
            </div>
            <div className="backdrop-opacity-[0.5] bg-red-600_67 blur-[50.00px] h-[200px] ml-auto mr-[125px] mt-[43px] rounded-[50%] w-[200px]"></div>
            <List
              className="absolute bottom-[0] sm:flex-col flex-row md:gap-10 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] h-[425px] inset-x-[0] justify-between max-w-[1194px] mx-auto w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-10 items-center justify-start w-auto">
                <Img
                  className="h-[150px] w-[150px]"
                  src="images/img_digitalmarketingpremium.svg"
                  alt="digitalmarketin"
                />
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
                    size="txtPoppinsMedium32"
                  >
                    <>
                      Modern <br />
                      Technology
                    </>
                  </Text>
                  <Text
                    className="max-w-[310px] md:max-w-full text-center text-gray-900 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    Lorem ipsum dolor sit amet consectetur. Non commodo mi elit
                    ut
                  </Text>
                </div>
              </div>
              <Line className="self-center h-[425px] bg-gray-500 w-px" />
              <div className="flex flex-col gap-10 items-center justify-start w-auto">
                <Img
                  className="h-[150px] w-[150px]"
                  src="images/img_digitalmarketingcopywriting.svg"
                  alt="digitalmarketin"
                />
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
                    size="txtPoppinsMedium32"
                  >
                    <>
                      Speed And <br />
                      Accuracy
                    </>
                  </Text>
                  <Text
                    className="max-w-[310px] md:max-w-full text-center text-gray-900 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    Lorem ipsum dolor sit amet consectetur. Non commodo mi elit
                    ut
                  </Text>
                </div>
              </div>
              <Line className="self-center h-[425px] bg-gray-500 w-px" />
              <div className="flex flex-col gap-10 items-center justify-start w-auto">
                <Img
                  className="h-[150px] w-[150px]"
                  src="images/img_digitalmarketingtarget.svg"
                  alt="digitalmarketin"
                />
                <div className="flex flex-col gap-5 items-center justify-start w-auto">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
                    size="txtPoppinsMedium32"
                  >
                    <>
                      Professional
                      <br />
                      Team
                    </>
                  </Text>
                  <Text
                    className="max-w-[310px] md:max-w-full text-center text-gray-900 text-lg"
                    size="txtPoppinsRegular18"
                  >
                    Lorem ipsum dolor sit amet consectetur. Non commodo mi elit
                    ut
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="font-poppins h-[2237px] md:h-[2558px] sm:h-[2972px] mt-[164px] md:px-5 relative w-full">
            <div className="flex flex-col m-auto w-full">
              <div className="bg-gradient3  h-[766px] mx-auto w-full"></div>
              <div className="flex flex-col items-center justify-start mt-[-670.32px] mx-auto w-[61%] z-[1]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[44%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-[35%] md:w-full">
                        <Text
                          className="text-[19.76px] text-red-A200"
                          size="txtPoppinsRegular1976RedA200"
                        >
                          Creative Services
                        </Text>
                        <Line className="bg-red-A200 h-px mt-[3px] rounded-[1px] w-[39%]" />
                      </div>
                      <Text
                        className="leading-[63.00px] mt-[19px] sm:text-[33.47px] md:text-[39.47px] text-[43.47px] text-black-900"
                        size="txtPoppinsSemiBold4347"
                      >
                        <>
                          Provide Awesome
                          <br />
                          Services
                        </>
                      </Text>
                      <Text
                        className="leading-[31.00px] mt-[19px] text-[19.76px] text-black-900 tracking-[0.40px]"
                        size="txtPoppinsRegular1976Black900"
                      >
                        <>
                          There are many variations of passages of LoremI
                          <br />
                          available, but the majority have suffered.
                        </>
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start mt-[23px] w-full">
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                        <Text
                          className="text-[15.81px] text-black-900_99 tracking-[0.32px]"
                          size="txtPoppinsMedium1581"
                        >
                          <>
                            All the Lorem Ipsum generators on the Internet tend
                            to
                            <br />
                            at predefined chunks as necessar
                          </>
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between mt-5 w-[99%] md:w-full">
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_One"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-[15.81px] text-black-900_99 tracking-[0.32px]"
                            size="txtPoppinsMedium1581"
                          >
                            <>
                              The standard chunk of Lorem Ipsum used since there{" "}
                              <br />
                              below for those interested.
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between mt-[17px] w-full">
                        <Img
                          className="h-[35px] w-[35px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark_Two"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-[15.81px] text-black-900_99 tracking-[0.32px]"
                            size="txtPoppinsMedium1581"
                          >
                            <>
                              All the Lorem Ipsum generators on the Internet
                              tend to
                              <br />
                              at predefined chunks as necessar
                            </>
                          </Text>
                        </div>
                      </div>
                      <Input
                        name="group31752"
                        placeholder="View Our Work"
                        className="font-medium p-0 placeholder:text-white-A700 text-[19.76px] text-left w-full"
                        wrapClassName="mt-[38px] w-[43%]"
                        shape="round"
                        color="red_A200"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:ml-[0] ml-[92px] w-[24%] md:w-full">
                      <div className="bg-white-A700 flex flex-col h-[266px] items-center justify-end p-7 sm:px-5 rounded-[9px] shadow-bs2 w-[266px]">
                        <div className="bg-red-A200_63 flex flex-col h-[88px] items-center justify-start p-[9px] rounded-[50%] w-[88px]">
                          <div className="bg-red-A200 flex flex-col h-[69px] items-center justify-start p-3.5 rounded-[34px] w-[69px]">
                            <Img
                              className="h-10 md:h-auto object-cover w-10"
                              src="images/img_backdrop11.png"
                              alt="backdropEleven"
                            />
                          </div>
                        </div>
                        <Text
                          className="mt-[17px] sm:text-[19.71px] md:text-[21.71px] text-[23.71px] text-center text-gray-900"
                          size="txtPoppinsMedium2371"
                        >
                          Backdrops
                        </Text>
                        <Text
                          className="leading-[20.00px] mt-[3px] text-[13.83px] text-center text-gray-600_90 tracking-[0.28px]"
                          size="txtPoppinsRegular1383"
                        >
                          <>
                            Quis autem veleum iure quin
                            <br /> voluptate velit esse quam
                            <br /> molesti conseqtur{" "}
                          </>
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-[17px] h-[266px] items-center justify-end p-7 sm:px-5 rounded-[9px] shadow-bs2 w-[266px]">
                        <div className="bg-orange-500_63 flex md:h-10 h-[88px] justify-end p-[9px] relative rounded-[50%] w-[88px]">
                          <Img
                            className="h-[25px] mb-[15px] mt-auto mx-auto"
                            src="images/img_computer.svg"
                            alt="computer"
                          />
                          <div className="absolute bg-orange-500 md:h-10 h-[69px] inset-[0] justify-center m-auto p-2.5 rounded-[34px] w-[69px]">
                            <Img
                              className="h-[25px] m-auto object-cover w-[25px]"
                              src="defaultNoData.png"
                              alt="maskgroup"
                            />
                            <Img
                              className="absolute h-10 inset-y-[0] my-auto object-cover right-[14%] w-10"
                              src="images/img_shoppingbag1.png"
                              alt="shoppingbagOne"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="sm:text-[19.71px] md:text-[21.71px] text-[23.71px] text-center text-gray-900"
                            size="txtPoppinsMedium2371"
                          >
                            Advertising Bags
                          </Text>
                          <Text
                            className="leading-[20.00px] mt-[3px] text-[13.83px] text-center text-gray-600_90 tracking-[0.28px]"
                            size="txtPoppinsRegular1383"
                          >
                            <>
                              Quis autem veleum iure quin
                              <br /> voluptate velit esse quam
                              <br /> molesti conseqtur{" "}
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col h-[266px] items-center justify-end md:ml-[0] ml-[29px] md:mt-0 my-[151px] p-7 sm:px-5 rounded-[9px] shadow-bs2 w-[266px]">
                      <div className="bg-teal-400_63 flex flex-col h-[88px] items-center justify-start p-[9px] rounded-[50%] w-[88px]">
                        <div className="bg-teal-400 md:h-10 h-[69px] p-3.5 relative rounded-[34px] w-[69px]">
                          <Img
                            className="h-[25px] m-auto object-cover w-[25px]"
                            src="defaultNoData.png"
                            alt="maskgroup_One"
                          />
                          <Img
                            className="absolute h-10 inset-[0] justify-center m-auto object-cover w-10"
                            src="images/img_entrance1.png"
                            alt="entranceOne"
                          />
                        </div>
                      </div>
                      <Text
                        className="mt-3.5 sm:text-[19.71px] md:text-[21.71px] text-[23.71px] text-center text-gray-900"
                        size="txtPoppinsMedium2371"
                      >
                        Arch
                      </Text>
                      <Text
                        className="leading-[20.00px] mt-1.5 text-[13.83px] text-center text-gray-600_90 tracking-[0.28px]"
                        size="txtPoppinsRegular1383"
                      >
                        <>
                          Quis autem veleum iure quin
                          <br /> voluptate velit esse quam
                          <br /> molesti conseqtur{" "}
                        </>
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-0.5 mt-36 w-0.5"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <Text
                    className="leading-[187.00%] mt-[1220px] text-[22px] text-black-900 text-center sm:text-lg md:text-xl w-[92%] sm:w-full"
                    size="txtPoppinsRegular22"
                  >
                    Canvas Printing l Duratrance Printing l One Way Vision
                    Printing l Blockout Banner Printing l Mesh Banner Printing l
                    Photo Paper Printing l Flyers l Business Cards l Roll Up
                    Stands l Promotional Stands & Many More Including
                    Installation Services
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[214px] mt-[49px] rounded-md text-[19.76px] text-center"
                    color="red_A200"
                    size="md"
                  >
                    View All Service
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[12%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[70%]">
              <div className="flex flex-col font-poppins gap-[23px] justify-start w-2/5 md:w-full">
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[196px] w-[18%] md:w-full">
                  <Text
                    className="text-[19.76px] text-red-A200"
                    size="txtPoppinsRegular1976RedA200"
                  >
                    Watch Us
                  </Text>
                  <Line className="bg-red-A200 h-px mt-0.5 rounded-[1px] w-[70%]" />
                </div>
                <Text
                  className="sm:text-[33.47px] md:text-[39.47px] text-[43.47px] text-gray-900 tracking-[-0.43px]"
                  size="txtPoppinsSemiBold4347Gray900"
                >
                  Our Many More Services
                </Text>
              </div>
              <Text
                className="leading-[26.00px] mt-[9px] text-base text-blue_gray-900_a7 text-center w-1/2 sm:w-full"
                size="txtPromptMedium16"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised
              </Text>
              <div className="flex flex-col items-end justify-start mt-[72px] w-auto md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
                      <Img
                        className="h-64 md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        src="images/img_rectangle33.png"
                        alt="rectangleThirtyThree"
                      />
                      <Img
                        className="h-[550px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                        src="images/img_rectangle34.png"
                        alt="rectangleThirtyFour"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
                      <Img
                        className="h-[456px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        src="images/img_rectangle36.png"
                        alt="rectangleThirtySix"
                      />
                      <Img
                        className="h-[350px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                        src="images/img_rectangle35.png"
                        alt="rectangleThirtyFive"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
                      <Img
                        className="h-64 md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                        src="images/img_rectangle37.png"
                        alt="rectangleThirtySeven"
                      />
                      <Img
                        className="h-[550px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                        src="images/img_rectangle38.png"
                        alt="rectangleThirtyEight"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-poppins h-[466px] md:h-[546px] max-w-[1320px] mt-[87px] mx-auto md:px-5 relative w-full">
            <Img
              className="absolute h-[448px] inset-[0] justify-center m-auto rounded-[20px]"
              src="images/img_rectangle39.svg"
              alt="rectangleThirtyNine"
            />
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[143px] md:px-10 sm:px-5 w-[90%]"
              style={{ backgroundImage: "url('images/img_group21.svg')" }}
            >
              <div className="flex flex-col gap-10 items-center justify-start mt-[29px] w-auto sm:w-full">
                <Text
                  className="leading-[34.00px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700"
                  size="txtPoppinsSemiBold32"
                >
                  <>
                    Ready to get Started with your
                    <br />
                    new project today
                  </>
                </Text>
                <div className="h-12 relative w-[94%] sm:w-full">
                  <Input
                    name="groupThirtyTwo"
                    placeholder="Enter email address"
                    className="justify-center p-0 placeholder:text-blue_gray-900_95 text-center text-sm tracking-[-0.28px] w-full"
                    wrapClassName="absolute inset-[0] m-auto rounded-[10px] w-full"
                    type="email"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Button
                    className="absolute cursor-pointer font-semibold h-full inset-y-[0] min-w-[120px] my-auto right-[0] rounded-[10px] text-center text-sm"
                    color="blue_gray_900_01"
                    size="md"
                  >
                    Submit Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter mt-[109px] md:px-5 relative w-full">
            <div className="bg-gradient4  flex flex-col items-center justify-start mx-auto p-[147px] md:px-10 sm:px-5 w-full">
              <div className="h-[477px] md:h-[489px] mb-3 relative w-[74%] md:w-full">
                <div className="flex flex-col gap-[43px] h-full justify-start m-auto w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[541px] ">
                    <Text
                      className="text-base mr-10  text-gray-900_01 tracking-[0.32px]"
                      size="txtInterMedium16"
                    >
                      <span className="text-white-A700 font-poppins  font-medium text-2xl ">
                        Client
                      </span>
                      <span className="text-gray-900_01 font-poppins text-left font-medium">
                        {" "}
                      </span>
                      
                      <span className="text-white-A700 font-poppins mr-96  font-medium text-2xl ">
                        Testimonial
                      </span>
                    </Text>
                  </div>
                  <div className="flex font-poppins  h-[414px] justify-end mt-20  relative w-full">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      activeIndex={sliderState}
                      responsive={{
                        0: { items: 1 },
                        550: { items: 1 },
                        1050: { items: 2 },
                      }}
                      onSlideChanged={(e) => {
                        setsliderState(e?.item);
                      }}
                      ref={sliderRef}
                      className="flex gap-[45px] mb-[68px] mt-auto mx-auto w-[99%]"
                      items={[...Array(6)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="flex flex-col gap-[18px] justify-start mx-2.5">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[158px] items-center justify-start p-[30px] sm:px-5 w-full"
                              style={{
                                backgroundImage: "url('images/img_review.svg')",
                              }}
                            >
                              <Text
                                className="leading-[26.00px] mb-5 text-base text-gray-600 w-[97%] sm:w-full"
                                size="txtPoppinsRegular16"
                              >
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.Lorem Ipsum is simply
                                dummy text of the printing and this typesetting
                                industry.
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[59px] w-[43%] md:w-full">
                              <div className="flex flex-row gap-[30px] items-center justify-between w-full">
                                <div className="md:h-[74px] h-[84px] relative w-[32%]">
                                  <div className="absolute h-[74px] inset-x-[0] mx-auto top-[0] w-[74px]">
                                    <Img
                                      className="h-16 m-auto rounded-[50%] w-16"
                                      src="images/img_placeimagehere.png"
                                      alt="placeimagehere"
                                    />
                                    <div className="absolute border border-red-600_01 border-solid h-[74px] inset-[0] justify-center m-auto rounded-[50%] w-[74px]"></div>
                                  </div>
                                  <Button
                                    className="absolute bottom-[0] flex h-7 inset-x-[0] items-center justify-center mx-auto w-7"
                                    shape="circle"
                                    color="red_600_01"
                                    size="xs"
                                  >
                                    <Img
                                      className="h-4"
                                      src="images/img_oouiquotesltr.svg"
                                      alt="oouiquotesltr"
                                    />
                                  </Button>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[56%]">
                                  <Text
                                    className="text-gray-900_02 text-xl"
                                    size="txtPoppinsMedium20"
                                  >
                                    Michale Doie
                                  </Text>
                                  <Text
                                    className="text-sm text-white-A700"
                                    size="txtPoppinsRegular14"
                                  >
                                    Product Designer
                                  </Text>
                                  <div className="flex flex-row items-start justify-start mt-[5px] w-[39%] md:w-full">
                                    <Img
                                      className="h-2.5 w-2.5"
                                      src="images/img_antdesignstarfilled.svg"
                                      alt="antdesignstarfi"
                                    />
                                    <Img
                                      className="h-2.5 w-2.5"
                                      src="images/img_antdesignstarfilled.svg"
                                      alt="antdesignstarfi_One"
                                    />
                                    <Img
                                      className="h-2.5 w-[11px]"
                                      src="images/img_antdesignstarfilled.svg"
                                      alt="antdesignstarfi_Two"
                                    />
                                    <Img
                                      className="h-2.5 w-2.5"
                                      src="images/img_antdesignstarfilled.svg"
                                      alt="antdesignstarfi_Three"
                                    />
                                    <Img
                                      className="h-[9px] w-[9px]"
                                      src="images/img_clarityhalfstarsolid.svg"
                                      alt="clarityhalfstar"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    />
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      activeIndex={sliderState1}
                      responsive={{
                        0: { items: 1 },
                        550: { items: 2 },
                        1050: { items: 3 },
                      }}
                      onSlideChanged={(e) => {
                        setsliderState1(e?.item);
                      }}
                      activeSlideCSS="scale-[1.00] absolute"
                      ref={sliderRef1}
                      className="absolute inset-[0] justify-center m-auto w-full"
                      items={[...Array(9)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <Img
                            className="h-[60px] mx-2.5"
                            src="images/img_bxsquoteleft.svg"
                            alt="bxsquoteleft"
                          />
                        </React.Fragment>
                      ))}
                    />
                  </div>
                </div>
                <div className="absolute flex flex-col font-poppins inset-x-[0] items-center justify-start mx-auto top-[2%]">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] my-10 text-gray-900_02 tracking-[0.92px]"
                    size="txtPoppinsMedium46"
                  >
                    Feedback From Client
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-col flex-row font-poppins gap-[42px] items-start justify-center mt-[-124px] mx-auto p-3.5 rounded-[20px] shadow-bs3 w-[68%] z-[1]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[615px] items-start justify-start md:ml-[0] ml-[21px] md:mt-0 mt-[31px] p-[19px] w-[43%] md:w-full"
                style={{ backgroundImage: "url('images/img_group38.png')" }}
              >
                <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start mb-[189px] ml-2.5 md:ml-[0] w-auto sm:w-full">
                  <div className="flex flex-col gap-[30px] items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtPoppinsRegular24"
                    >
                      Contact Information
                    </Text>
                    <Text
                      className="leading-[26.00px] max-w-[438px] md:max-w-full text-base text-white-A700_a7"
                      size="txtPoppinsMedium16"
                    >
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-[291px]">
                    <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                      <Img
                        className="h-[22px] w-4"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtPoppinsSemiBold16"
                      >
                        (406) 555-0120
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                      <Img
                        className="h-[19px] w-4"
                        src="images/img_mail.svg"
                        alt="mail"
                      />
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtPoppinsSemiBold16"
                      >
                        bill.sanders@example.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                      <Img
                        className="h-[22px] w-3"
                        src="images/img_call.svg"
                        alt="call_One"
                      />
                      <Text
                        className="text-base text-white-A700 w-auto"
                        size="txtPoppinsSemiBold16"
                      >
                        2464 Royal Ln. Mesa, New Jersey
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[50px] items-start justify-start mr-[45px] md:mt-0 mt-[123px] w-auto md:w-full">
                <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start w-auto md:w-full">
                  <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-auto md:w-full">
                    <Input
                      name="frameNinety"
                      placeholder="Your Name"
                      className="font-medium font-poppins p-0 placeholder:text-blue_gray-900_01 sm:pr-5 text-base text-left w-full"
                      wrapClassName="pr-[35px] w-[46%] md:w-full"
                      type="text"
                      size="sm"
                    ></Input>
                    <Input
                      name="frameNinetyOne"
                      placeholder="Your Email"
                      className="font-medium font-prompt p-0 placeholder:text-blue_gray-900_01 sm:pr-5 text-base text-left w-full"
                      wrapClassName="pr-[35px] w-[46%] md:w-full"
                      type="email"
                      size="sm"
                    ></Input>
                  </div>
                  <Input
                    name="frameNinetyTwo"
                    placeholder="Your Subject"
                    className="font-medium p-0 placeholder:text-blue_gray-900_01 sm:pr-5 text-base text-left w-full"
                    wrapClassName="pr-[35px] w-full"
                    size="sm"
                  ></Input>
                  <div className="flex flex-col gap-[50px] h-[66px] md:h-auto items-start justify-start w-auto md:w-full">
                    <Text
                      className="text-base text-blue_gray-900_01 w-auto"
                      size="txtPoppinsMedium16Bluegray90001"
                    >
                      Message
                    </Text>
                    <Line className="bg-blue_gray-900_01 h-px w-full" />
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[211px] rounded-[5px] text-center text-lg"
                  color="blue_gray_900_01"
                  size="md"
                >
                  Submit Now
                </Button>
              </div>
            </div>
          </div>
    
          {/* <Text className="md:ml-[0] ml-[400px] mt-[01px] md:text-5xl text-[100px] text-black-900" size="txtHelveticaRoundedBold100">“</Text> */}
<Text className="md:ml-[20] ml-[85px] sm:text-[44px] md:-mt-60 md:text-[50px] text-[58px] text-black-900_01 text-center" size="txtPlayfairDisplayRomanRegular58">
  <span className="text-black-900 text-6xlxl font-bold">“</span>
  <span className="text-yellow-700 font-playfairdisplay font-bold italic">Stopping</span>
  <span className="text-black-900_01 font-playfairdisplay font-normal"> </span>
  <span className="text-red-600 font-playfairdisplay font-normal">advertising</span>
  <span className="text-black-900_01 font-playfairdisplay font-normal"> to save money is <br /> like </span>
  <span className="text-light_green-400 font-playfairdisplay font-extrabold italic">stopping your watch</span>

</Text>
<Text className="md:ml-[20] ml-[125px] sm:text-[44px] md:text-[50px] text-[58px] text-black-900_01 text-center" size="txtPlayfairDisplayRomanRegular58">
  <span className="text-black-900_01 font-playfairdisplay font-normal"> to save </span>
 
  <span className="text-black-900_01 font-playfairdisplay font-normal"> your time</span>
  <span className="text-black-900 text-6xlxl font-bold">,,</span>

</Text>
{/* <Text className="md:ml-[0] mr-[400px] rotate-[180deg] md:text-5xl text-[100px] text-black-900" size="txtHelveticaRoundedBold100">“</Text> */}

          <div className="flex flex-row items-center justify-center md:ml-[0] ml-[956px] mt-[45px] md:px-5 w-[2%] md:w-full">
            <div className="bg-teal-A700 h-[15px] rounded-[7px] w-[15px]"></div>
            <div className="bg-gray-400 h-[15px] ml-[5px] rounded-[7px] w-[15px]"></div>
          </div>
          <footer className="bg-blue_gray-900_02 flex font-poppins items-center justify-center mt-[71px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-center mb-[27px] ml-[375px] mr-[352px] mt-[108px] w-[62%]">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[79px] w-[26%] md:w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-start w-full">
                      <Img
                        className="h-[19px] mt-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="text-[15.81px] text-white-A700"
                        size="txtPoppinsRegular1581"
                      >
                        <>
                          Office 9, AH Building, Makka Street,
                          <br />
                          Al Rawda 1, Ajman, U.A.E
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[5px] items-start justify-start mt-6 w-[51%] md:w-full">
                      <Img
                        className="h-[19px]"
                        src="images/img_call.svg"
                        alt="call_Two"
                      />
                      <Text
                        className="text-[15.81px] text-white-A700"
                        size="txtPoppinsRegular1581"
                      >
                        +971 6 520 6845
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[26px]">
                      <Text
                        className="text-[15.81px] text-red-A200"
                        size="txtPoppinsRegular1581RedA200"
                      >
                        Open Hours:
                      </Text>
                      <Text
                        className="mt-1 text-[15.81px] text-white-A700_a2"
                        size="txtPoppinsRegular1581WhiteA700a2"
                      >
                        Mon-Sat: 9 am-6pm
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[106px] w-[6%] md:w-full">
                    <Text
                      className="text-[19.76px] text-white-A700"
                      size="txtPoppinsMedium1976"
                    >
                      Links
                    </Text>
                    <ul className="flex flex-col items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-[15.81px] text-white-A700_a2"
                        >
                          <Text size="txtPoppinsRegular1581WhiteA700a2">
                            Home
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[19px] text-[15.81px] text-white-A700_a2"
                        >
                          <Text size="txtPoppinsRegular1581WhiteA700a2">
                            About
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[19px] text-[15.81px] text-white-A700_a2"
                        >
                          <Text size="txtPoppinsRegular1581WhiteA700a2">
                            Services
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-3.5 text-[15.81px] text-white-A700_a2"
                        >
                          <Text size="txtPoppinsRegular1581WhiteA700a2">
                            Portfolio
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="flex flex-col items-start justify-start mb-[29px] md:ml-[0] ml-[304px] w-[34%] md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="sm:text-[19.71px] md:text-[21.71px] text-[23.71px] text-white-A700"
                      >
                        <Text size="txtPoppinsMedium2371WhiteA700">
                          Newsletter
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[27px] text-[15.81px] text-gray-600_01"
                      >
                        <Text size="txtPoppinsRegular1581Gray60001">
                          Send us a newsletter to get update
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <Input
                          name="group31742"
                          placeholder="Your mail address"
                          className="leading-[normal] p-0 placeholder:text-white-A700_a2 text-[15.81px] text-left w-full"
                          wrapClassName="flex mt-3 pl-[19px] rounded"
                          suffix={
                            <div className="ml-[35px] pt-[11px] pb-[13px] pl-6 pr-[23px] rounded-tr-[5px] rounded-br-[5px] sm:px-5 bg-red-A200">
                              <Img
                                className="my-auto"
                                src="images/img_telegramplane.svg"
                                alt="telegram-plane"
                              />
                            </div>
                          }
                          shape="round"
                          color="white_A700_19"
                          variant="fill"
                        ></Input>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex flex-row items-center justify-start mt-[29px]">
                          <Button
                            className="flex h-[43px] items-center justify-center w-[43px]"
                            shape="round"
                          >
                            <Img src="images/img_facebook.svg" alt="facebook" />
                          </Button>
                          <Button
                            className="flex h-[43px] items-center justify-center ml-3.5 w-[43px]"
                            shape="round"
                          >
                            <Img src="images/img_twitter.svg" alt="twitter" />
                          </Button>
                          <Button
                            className="flex h-[43px] items-center justify-center ml-3.5 w-[43px]"
                            shape="round"
                          >
                            <Img
                              className="h-[21px]"
                              src="images/img_youtube.svg"
                              alt="youtube"
                            />
                          </Button>
                          <Button
                            className="flex h-[43px] items-center justify-center ml-3.5 w-[43px]"
                            shape="round"
                          >
                            <Img
                              src="images/img_instagram.svg"
                              alt="instagram"
                            />
                          </Button>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <Line className="bg-white-A700_63 h-px mt-[57px] w-full" />
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-7 w-[98%] md:w-full">
                  <Text
                    className="text-white-A700_a2 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    © Copyright 2020 colorsproadv.com. All Rights Reserved.
                  </Text>
                  <a href="javascript:" className="text-white-A700_cc text-xs">
                    <Text size="txtPoppinsRegular12WhiteA700cc">
                      Terms & Conditions
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default MockTwoPage;
