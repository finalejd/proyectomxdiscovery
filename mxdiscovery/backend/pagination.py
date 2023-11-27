from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class CustomPagination(PageNumberPagination):
    page_size = 9 #Numero de elementos por pagina
    page_size_query_param = 'page_size' #El usuario determia el tamano de elementos segun su consulta
    max_page_size = 9 #Tamano maximo de elementos
    page_query_param = 'page' #parametro especificado

    def get_paginated_response(self, data): #metodo que devuelve los datos paginados cuando es llamado
        return Response({
            'data': data,
            'meta': {
                'next': self.page.next_page_number()
                if self.page.has_next() else None,
                'previous': self.page.previous_page_number()
                if self.page.has_previous() else None,
                'count': self.page.paginator.count,
                }
        })
