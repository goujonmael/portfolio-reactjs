import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import "./Me.css";
import Image from "react-image";

export default function Me() {
    const [isIutHovered, setIsIutHovered] = useState(false);
    const [isAirbusHovered, setIsAirbusHovered] = useState(false);
    const constraintsRef = useRef(null);
    return (
        <motion.div
            className="me"
            ref={constraintsRef}
            style={{
                position: "relative"
            }}
        >

            <motion.div
                className="profile"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <img
                    style={{ borderRadius: '50%' }}
                    src="/images/Me/pp.jpg"
                    alt="Picture of Mael GOUJON"
                    width={180}
                    height={180}
                />
            </motion.div>
            <div className="me_right">
                <motion.h1 className="name">
                    GOUJON
                    <br />
                    Mael
                </motion.h1>
                {isIutHovered && (
                        <motion.div
                            animate={{
                                x: [0, 10, 20, 30, 40, 50, 60, 70 ],
                                y: [0],
                            }}
                            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                            style={{
                                width: 30,
                                height: 30,
                                position: "absolute",
                                top: 0,
                            }}
                        >
                            <img
                                src="/images/Me/school.svg"
                                alt=" "
                                width={30}
                                height={30}
                            />
                        </motion.div>
                    )}
                <span className="description">
                    Étudiant en <a className="but" href="https://www.univ-tlse3.fr/decouvrir-nos-diplomes/but-informatique-parcours-deploiement-dapplications-communicantes-et-securisees-toulouse"
                        onMouseEnter={() => setIsIutHovered(true)} onMouseLeave={() => setIsIutHovered(false)}
                    >Informatique
                    </a>
                    <br />
                    Alternant chez <a className="airbus" href="https://www.airbus.com/en/products-services/space/telecommunications-and-navigation-satellites" onMouseEnter={() => setIsAirbusHovered(true)}
                        onMouseLeave={() => setIsAirbusHovered(false)} style={{ position: 'relative', display: 'inline-block' }}>Airbus
                        {isAirbusHovered && (
                            <motion.div
                                animate={{ x: [0, 50, 0] }}
                                transition={{ duration: 1, ease: "linear" }}
                                style={{
                                    width: 30,
                                    height: 30,
                                    position: "absolute",
                                }}
                            >
                                <img
                                    src="/images/satellite.svg"
                                    alt=" "
                                    width={30}
                                    height={30}
                                />
                            </motion.div>
                        )}
                    </a>
                </span>

            </div>

        </motion.div>
    )
}
