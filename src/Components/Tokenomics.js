import React from "react";
import { useRef } from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./Token.css";

const Tokenomics = () => {
    const dataMock = [
        { title: "Burn supply 50%", value: 50.0, color: "#32e4ed", titlep: "Burn supply" },
        { title: "Remaining supply  50%", value: 50.0, color: "#7c7af0", titlep: "Remaining supply" },

    ];

    const toolTip = useRef(null);
    return (
        <div className="bg-transparent py-10 px-14 md:pt-24 md:px-28 sm:p-14  pb-0">

            <h1
                className="bigHeading p-10 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]"
                style={{ textAlign: "center" }}
            >
                <span className="text-[#ff0000] -translate-x-2/4">
                    {" "}
                    Tokenomics{" "}
                </span>
            </h1>
            <br />
            <div className="customTooltip" ref={toolTip}></div>
            <div className="pi-data tknTop flex justify-center">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-y-14">
                    <div className="lg:w-1/4 sm:w-full">
                        <p style={{fontFamily:"revert"}} className="text-white text-justify text-lg ">
                            “A token named "Buff Goofy" is created with a supply of 1,000 trillion. Initially, 50% of the tokens are burned, reducing the supply. The remaining 50% is distributed among users, ensuring broad ownership.
                            <br/>  <br/>
                            A maximum buy and sell tax of 5% is implemented . However, the tax rate can be gradually reduced to 0% in the future, promoting a more dynamic and flexible token economy.
                            As part of the token distribution, 15% of the token supply is allocated to the marketing wallet.”
                        </p>
                    </div>
                    <div className="mainPieCgar">
                        <PieChart
                            animationDuration={1000}
                            animate={true}
                            data={dataMock}

                            onMouseOver={(e, index) => {
                                toolTip.innerHTML =
                                    dataMock[index].title + " " + dataMock[index].value + " %";
                                e.target.style.opacity = "0.8";
                                e.target.style.cursor = "pointer";
                                // toolTip.current.style.top = e.pageY + "px";
                                // toolTip.current.style.left = e.pageX + "px";
                                toolTip.current.classList.add("active");
                            }}
                            onMouseOut={(e, index) => {
                                e.target.style.opacity = "1";
                                e.target.style.cursor = "auto";
                                toolTip.current.classList.remove("active");
                            }}
                            lineWidth={45}
                            labelPosition={75}
                        />
                        <p>
                            Total <small>1000 trillion</small>
                        </p>
                    </div>
                    <ul className="ul_data-list">
                        <h5 className="fs-4">Token Pools</h5>
                        {dataMock &&
                            dataMock.map((data, id) => {
                                return (
                                    <li className="fs-5" key={id}>
                                        <div>
                                            <small style={{ background: data.color }}></small>{" "}
                                            {data.titlep}
                                        </div>{" "}
                                        <span>{data.value}%</span>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;
