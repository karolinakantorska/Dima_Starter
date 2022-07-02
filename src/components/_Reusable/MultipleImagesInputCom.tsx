import { ChangeEventHandler } from "react";
import ErrorTextCom from "./ErrorTextCom";
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Box from "@mui/system/Box";
import LoadingLinealWithNumberCom from "./LoadingLinealWithNumberCom";

export default function MultipleImagesInputCom({
    handleAddPhotos,
    loading,
    error,
    progress,
}: {
    handleAddPhotos: ChangeEventHandler<HTMLInputElement>,
    loading: boolean,
    error: string | boolean,
    progress: number
}) {
    return (

        <Grid container direction='column'>
            <Grid item>
                <input
                    type="file"
                    id="photos-upload"
                    name="projectPhoto"
                    style={{ display: "none" }}
                    accept="image/png, image/jpeg"
                    onChange={handleAddPhotos}
                    multiple
                    disabled={loading}
                />
                <IconButton aria-label="add project photos" >
                    <label htmlFor="photos-upload">
                        <AddAPhotoIcon sx={{ fontSize: 60 }} aria-label="add project photos" />
                    </label>
                </IconButton>
            </Grid>
            <Grid item>
                <Box sx={{ width: '100%', height: 20, }}>
                    {loading && <LoadingLinealWithNumberCom progress={progress} />}
                    {error && <ErrorTextCom text={error} />}
                </Box>
            </Grid>
        </Grid>
    )
}

