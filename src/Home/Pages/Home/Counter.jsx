import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { ColorHelper } from "../../../Helper/ColorHelper";
import AOS from "aos";
import 'aos/dist/aos.css';

const Counter = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    const counters = [
        { label: "Country Export", value: 15, icon: 'clarity:plane-line', suffix: "+" },
        { label: "Export Oriented Units", value: 100, icon: 'carbon:delivery-parcel', suffix: "%" },
        { label: "Satisfied Importers", value: 20, icon: 'ix:customer', suffix: "+" },
        { label: "Team Members", value: 50, icon: 'ri:team-line', suffix: "+" },
    ];

    return (
        <Box ref={ref}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap={{ xs: 2, sm: 4, md: 6 }}
            p={{ xs: 4, sm: 6, md: 10, lg: 15 }}>
            {counters.map((counter, index) => (
                <Box key={index}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: { xs: '100%', sm: '45%', md: '22%' },
                        textAlign: 'center'
                    }} data-aos="zoom=in">
                    <Box component={Icon} icon={counter.icon} sx={{ fontSize: { xs: '3rem', sm: '4rem' }, color: "#6dac71" }} />
                    <Typography variant="h4" fontWeight="bold" color={ColorHelper.appColorDark} sx={{ fontSize: { xs: '2rem', sm: '2.8rem' } }}>
                        {inView ? (
                            <CountUp start={0} end={counter.value} duration={2.5} suffix={counter.suffix} />
                        ) : (
                            `0${counter.suffix}`
                        )}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1, fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: 800, color: 'gray' }}>
                        {counter.label}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default Counter;
