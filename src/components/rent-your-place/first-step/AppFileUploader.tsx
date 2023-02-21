import {SetStateAction, useEffect, useState} from "react";
import {FileUploader} from "react-drag-drop-files";
import {Grid, Paper, Stack} from "@mui/material";
import EuclidText from "@/components/css-texts/EuclidText";
import Image from "next/image";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
    const [files, setFiles] = useState<FileList | null>();
    const [preview, setPreview] = useState<string[]>([])
    const handleChange = (file: SetStateAction<FileList | null | undefined>) => {
        setFiles(file);
    };

    useEffect(() => {
        let previewArr = [];
        if (files?.length) {
            for (let i = 0; i < files.length; i++) {
                previewArr.push(URL.createObjectURL(files[i]))
            }
            setPreview(previewArr)
        }
    }, [files])

    return (
        <Paper elevation={3} sx={{p: 1, mt: 1}}>
            <EuclidText variant={'subtitle1'} sx={{fontWeight: 600, mb: 1}} text={'Upload Images'}/>
            <Stack alignItems={'center'}>
                <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                />
            </Stack>
            <Grid container spacing={1} mt={2}>
                {preview?.map((item, index) =>
                    <Grid key={index} item>
                        <Image src={item} alt={'Pic'} width={100} height={100} style={{borderRadius: 5}}/>
                    </Grid>
                )}
            </Grid>
        </Paper>
    );
}

export default DragDrop;