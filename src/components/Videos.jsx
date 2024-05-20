import React from 'react'
import { Box, Stack } from "@mui/material";
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos, direction }) => {
    if (!videos?.length) return "loading...";
    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
            {videos?.map((video, index) => (
                <Box key={index}>

                    {video?.id.channelId && <ChannelCard channelDetail={video} /> || video?.id && <VideoCard video={video} />}
                </Box>

            ))}

        </Stack>
    )
}

export default Videos
