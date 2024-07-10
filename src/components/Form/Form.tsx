import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import styles from './Form.module.scss';
import buttonStyle from '../Link/Link.module.scss';

const FormSchema = z.object({
    name: z.string().min(1),
    last_name: z.string().min(1),
    email: z.string().email(),
    phone: z.number().positive(),
    message: z.string().min(1)
});

type FormFields = z.infer<typeof FormSchema>;

const Form = () => {
    const { register, handleSubmit, setError, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormFields>({
        resolver: zodResolver(FormSchema)
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const formData = {...data};
        try {
            emailjs.send('service_74frs1s', 'template_40w0dx5', formData, 'N_hf14tjCQIJwqwnq').then((result) => {
                console.log(result);
            })
        } catch(e) {
            setError("root", e);
        }
    }

    if( isSubmitSuccessful ) return (<p>Form submitted successfully!</p>);

    return <form className={styles.form} data-aos="fade-up" data-aos-once="true" onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.fifty} ${styles['form-field']}`}>
            <label htmlFor="name">first name:</label>
            <input type="text" placeholder="First Name" {...register('name')} />
            {errors?.name && <p>{errors.name.message}</p>}
        </div>
        <div className={`${styles.fifty} ${styles['form-field']}`}>
            <label htmlFor="last">last name:</label>
            <input type="text" placeholder="Last Name" {...register('last_name')} />
            {errors?.last_name && <p>{errors.last_name.message}</p>}
        </div>
        <div className={`${styles.fifty} ${styles['form-field']}`}>
            <label htmlFor="email">email:</label>
            <input type="text" placeholder="Email" {...register('email')} />
            {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div className={`${styles.fifty} ${styles['form-field']}`}>
            <label htmlFor="phone">phone</label>
            <input type="tel" name="Phone" {...register('phone', {
                valueAsNumber: true
            })} />
            {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div className={`${styles.full} ${styles['form-field']}`}>
            <label htmlFor="text-area">Message</label>
            <textarea name="text-area" className={styles['text-area']} placeholder="i'd like to know more about..."
            ></textarea>
            {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button className={`${buttonStyle.link} ${buttonStyle.secondary} ${buttonStyle.black}`} disabled={isSubmitting} type="submit">{isSubmitting ? 'Loading...' : 'Submit'}</button>
    </form>
}

export default Form;