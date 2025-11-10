import React, { useCallback } from 'react'
import { set, unset } from 'sanity'
import { TextInput, Stack, Text } from '@sanity/ui'
import { StringInputProps, useFormValue } from 'sanity'

type PlaceholderStringInputProps = StringInputProps & {
  schemaType: {
    options?: {
      field?: string
    }
  }
}

const PlaceholderStringInput = React.forwardRef<HTMLInputElement, PlaceholderStringInputProps>(
  (props, ref) => {
    const { onChange, value = '', schemaType, elementProps } = props

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.currentTarget.value
        onChange(inputValue ? set(inputValue) : unset())
      },
      [onChange]
    )

    // Get the document value for the placeholder field
    const document = useFormValue([]) as Record<string, any>
    const proxyValue = schemaType?.options?.field ? document?.[schemaType.options.field] : ''

    return (
      <Stack space={3}>
        {schemaType.description && (
          <Text size={1} muted>
            {schemaType.description}
          </Text>
        )}
        <TextInput
          {...elementProps}
          ref={ref}
          value={value}
          onChange={handleChange}
          placeholder={proxyValue || ''}
        />
      </Stack>
    )
  }
)

PlaceholderStringInput.displayName = 'PlaceholderStringInput'

export default PlaceholderStringInput
