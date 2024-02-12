import {useForm} from "react-hook-form";
import {carService} from "../services/carService";
import {useEffect} from "react";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {reset, register,
        handleSubmit,
        formState:{isValid, errors},
        setValue} = useForm({
        mode:'all'
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)
        }
    }, [carForUpdate])

    const save = async (car) => {
        await carService.create(car)
        setTrigger(prev => !prev)
        reset()
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setTrigger(prev => !prev)
        setCarForUpdate(null)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'min 1 max 2 character'
                }
            })}/>
            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: {value: 1990, message: 'min 1990'},
                max: { value: 2023, message: 'max 2023'}
            })}/>
            <input type="text" placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: {value: 0, message: 'min 0'},
                max: {value: 1_000_000, message: 'max 1 000 000'}
            })}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            {errors.brand&&<div>{errors.brand.message}</div>}
            {errors.year&&<div>{errors.year.message}</div>}
            {errors.price&&<div>{errors.price.message}</div>}
        </form>
    );
};

export {CarForm};