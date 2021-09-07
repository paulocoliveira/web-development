import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from "classnames"

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton
} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import ModalConfirm from "./ModalConfirm"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}))

const CustomerCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    className,
    onRemoveCustomer,
}) => {
    const classes = useStyles()

    const [openModal, setOpenModal] = useState(false)

    const handleToggleOpenModal = () => {
        setOpenModal(!openModal)
    }

    const handleConfirmModal = id => {
        handleToggleOpenModal()
        onRemoveCustomer(id)
    }

    const handleRemoveCustomer = () => {
        handleToggleOpenModal()
    }

    return (
    <>
        <Card className={classNames(className, classes.root)}>
            <CardHeader
            avatar={
                <Avatar aria-label="recipe" src={avatar}>
                    R
                </Avatar>
            }
            title={`${name} ${lastname}`}
            subheader={email}
            />
            <CardActions disableSpacing>
            <IconButton aria-label="edit customer">
                <EditIcon />
            </IconButton>
            <IconButton aria-label="delete customer" onClick={handleRemoveCustomer}>
                <DeleteIcon />
            </IconButton>
            </CardActions>
        </Card>
        <ModalConfirm 
            open={openModal} 
            onClose={handleToggleOpenModal}
            onConfirm={() => handleConfirmModal(id)}
            title = "Do you really want to delete this entry?"
            message = "After confirming it will not be possible to reverse this operation."
        />
    </>
    )
    }

export default CustomerCard