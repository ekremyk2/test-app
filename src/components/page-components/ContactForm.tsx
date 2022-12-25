import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { observer } from 'mobx-react-lite';
import React from 'react';
import IGetterSetter from '../../helpers/interfaces/IGetterSetter';
import Dropdownlist from '../helper-components/Dropdownlist';
import Textarea from '../helper-components/Textarea';
import Textbox from '../helper-components/Textbox';

const ContactForm = ({
  onSubmit,
  form,
}: {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  form: {
    NameSurname: IGetterSetter<string>;
    CompanyName: IGetterSetter<string>;
    CompanyType: IGetterSetter<string>;
    PhoneNumber: IGetterSetter<string>;
    EMail: IGetterSetter<string>;
    Message: IGetterSetter<string>;
  };
}) => {
  return (
    <div className='content-card'>
      <div className='contact-form-wrapper'>
        <div className='contact-form-title'>{`Contact Form`}</div>
        <div className='contact-form-container'>
          <form onSubmit={onSubmit}>
            <FormControl fullWidth>
              <Textbox title='Name Surname' bind={form.NameSurname} required />
              <Textbox title='Company Name' bind={form.CompanyName} required />
              <Dropdownlist
                title='Company Type'
                bind={form.CompanyType}
                required
                data={[
                  { text: 'Start-Up', value: 'start-up' },
                  { text: 'Enterprise', value: 'enterprise' },
                  { text: 'Non-Profit', value: 'non-profit' },
                  { text: 'Other', value: 'other' },
                ]}
              />
              <Textbox type='tel' title='Phone Number' bind={form.PhoneNumber} required />
              <Textbox type='email' title='E-Mail' bind={form.EMail} required />
              <Textarea title='Message' bind={form.Message} required />
              <Button variant='contained' type='submit'>{`Get in Touch...`}</Button>
            </FormControl>
          </form>
        </div>
      </div>
    </div>
  );
};

export default observer(ContactForm);
