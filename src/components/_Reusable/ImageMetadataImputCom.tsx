import React, { SyntheticEvent, useState, ChangeEvent } from "react";
import { FormControl, Grid, IconButton, TextField, Typography } from "@mui/material";
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

import { ImageType } from 'src/utils/TS/interface';
import { useForm } from "src/utils/myUtils/useForm";



export default function ImageMetadataInputCom({
    image,
    editMetadata,
    index,
    loading,

}: {
    image: ImageType,
    editMetadata: any,
    index: number,
    loading: boolean,

}
) {

    const [edit, setEdit] = useState(false);
    const { inputs, handleInputChange } = useForm({ alt: 'image.alt' });

    async function handleClick() {
        if (!loading) {
            setEdit(!edit)
            if (edit) {
                if (index) {
                    await editMetadata(image.url, inputs, index)
                    setEdit(false)
                } else {
                    await editMetadata(image.url, inputs,)
                    setEdit(false)
                }
            }
        }
    }
    return (
        <Grid container direction="row-reverse" spacing={2} justifyContent="space-between" sx={{ height: 160 }}>
            <Grid item>
                {image && <IconButton aria-label={edit ? 'save' : 'edit'} onClick={handleClick}>
                    {!edit && <EditRoundedIcon />}
                    {edit && <SaveAltOutlinedIcon />}
                </IconButton>}

            </Grid>
            <Grid item>
                {image && !edit && (
                    <>
                        <Typography variant="body2" component="p">{image.alt}</Typography>
                    </>
                )}
                {edit && (
                    <FormControl>
                        <TextField
                            name="alt"
                            onChange={handleInputChange}
                            defaultValue={image.alt}
                            disabled={loading}
                            margin="dense"
                            label="Beschriftung"
                            type="text"
                            variant="outlined"
                        />
                    </FormControl>
                )}
            </Grid>

        </Grid>
    );
}
/*
{loading && <LoadingLinealCom />}
                        {error && <ErrorTextCom text={error} />}
*/